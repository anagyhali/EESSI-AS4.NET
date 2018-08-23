﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Schema;
using System.Xml.Serialization;
using AutoMapper;
using Eu.EDelivery.AS4.Exceptions;
using Eu.EDelivery.AS4.Model.Core;
using Eu.EDelivery.AS4.Resources;
using Eu.EDelivery.AS4.Singletons;
using Eu.EDelivery.AS4.Streaming;
using Eu.EDelivery.AS4.Xml;
using NLog;
using Error = Eu.EDelivery.AS4.Model.Core.Error;
using NotSupportedException = System.NotSupportedException;
using PullRequest = Eu.EDelivery.AS4.Model.Core.PullRequest;
using Receipt = Eu.EDelivery.AS4.Model.Core.Receipt;
using SignalMessage = Eu.EDelivery.AS4.Model.Core.SignalMessage;
using UserMessage = Eu.EDelivery.AS4.Model.Core.UserMessage;

namespace Eu.EDelivery.AS4.Serialization
{
    /// <summary>
    /// Serialize <see cref="AS4Message" /> to a <see cref="Stream" />
    /// </summary>
    public partial class SoapEnvelopeSerializer : ISerializer
    {
        private static readonly ILogger Logger = LogManager.GetCurrentClassLogger();

        private static readonly XmlWriterSettings DefaultXmlWriterSettings = new XmlWriterSettings
        {
            CloseOutput = false,
            Encoding = new UTF8Encoding(false)
        };

        public Task SerializeAsync(AS4Message message, Stream stream, CancellationToken cancellationToken)
        {
            return Task.Run(() => this.Serialize(message, stream, cancellationToken), cancellationToken);
        }

        /// <summary>
        /// Serialize SOAP Envelope to a <see cref="Stream" />
        /// </summary>
        /// <param name="message"></param>
        /// <param name="stream"></param>
        /// <param name="cancellationToken"></param>
        public void Serialize(AS4Message message, Stream stream, CancellationToken cancellationToken)
        {
            var builder = new SoapEnvelopeBuilder(message.EnvelopeDocument);

            XmlNode securityHeader = GetSecurityHeader(message);

            if (securityHeader != null)
            {
                builder.SetSecurityHeader(securityHeader);
            }

            if (message.EnvelopeDocument == null)
            {
                SetMultiHopHeaders(builder, message);

                Messaging messagingHeader = CreateMessagingHeader(message);

                builder.SetMessagingHeader(messagingHeader);
                builder.SetMessagingBody(message.SigningId.BodySecurityId);
            }

            WriteSoapEnvelopeTo(builder.Build(), stream);
        }

        private static Messaging CreateMessagingHeader(AS4Message message)
        {
            object ToGeneralMessageUnit(MessageUnit u)
            {
                switch (u)
                {
                    case UserMessage _: return AS4Mapper.Map<Xml.UserMessage>(u);
                    case SignalMessage _: return AS4Mapper.Map<Xml.SignalMessage>(u);
                    default:
                        throw new NotSupportedException(
                            $"AS4Message contains unkown MessageUnit of type: {u.GetType()}");
                }
            }

            var messagingHeader = new Messaging
            {
                SecurityId = message.SigningId.HeaderSecurityId,
                MessageUnits = message.MessageUnits.Select(ToGeneralMessageUnit).ToArray()
            };

            if (message.IsMultiHopMessage)
            {
                messagingHeader.role = Constants.Namespaces.EbmsNextMsh;
                messagingHeader.mustUnderstand1 = true;
                messagingHeader.mustUnderstand1Specified = true;
            }

            return messagingHeader;
        }

        private static XmlNode GetSecurityHeader(AS4Message message)
        {
            if (message.SecurityHeader.IsSigned == false && message.SecurityHeader.IsEncrypted == false)
            {
                return null;
            }

            return message.SecurityHeader?.GetXml();
        }

        private static void SetMultiHopHeaders(SoapEnvelopeBuilder builder, AS4Message as4Message)
        {
            if (as4Message.IsSignalMessage && as4Message.FirstSignalMessage.IsMultihopSignal)
            {
                var to = new To { Role = Constants.Namespaces.EbmsNextMsh };
                builder.SetToHeader(to);

                string actionValue = as4Message.FirstSignalMessage.MultihopAction;
                builder.SetActionHeader(actionValue);

                var routingInput = new RoutingInput
                {
                    UserMessage = as4Message.FirstSignalMessage.MultiHopRouting.UnsafeGet,
                    mustUnderstand = false,
                    mustUnderstandSpecified = true,
                    IsReferenceParameter = true,
                    IsReferenceParameterSpecified = true
                };

                builder.SetRoutingInput(routingInput);
            }
        }

        private static void WriteSoapEnvelopeTo(XmlNode soapEnvelopeDocument, Stream stream)
        {
            using (XmlWriter writer = XmlWriter.Create(stream, DefaultXmlWriterSettings))
            {
                soapEnvelopeDocument.WriteTo(writer);
            }
        }

        /// <summary>
        /// Parser the SOAP message to a <see cref="AS4Message" />
        /// </summary>
        /// <param name="envelopeStream">RequestStream that contains the SOAP Messaging Header</param>
        /// <param name="contentType"></param>
        /// <param name="token"></param>
        /// <returns><see cref="AS4Message" /> that wraps the User and Signal Messages</returns>
        public async Task<AS4Message> DeserializeAsync(Stream envelopeStream, string contentType, CancellationToken token)
        {
            if (envelopeStream == null)
            {
                throw new ArgumentNullException(nameof(envelopeStream));
            }

            XmlDocument envelopeDocument = LoadXmlDocument(envelopeStream);

            // Sometimes throws 'The 'http://www.w3.org/XML/1998/namespace:lang' attribute is not declared.'
            // ValidateEnvelopeDocument(envelopeDocument);

            var nsMgr = GetNamespaceManagerForDocument(envelopeDocument);

            var securityHeader = DeserializeSecurityHeader(envelopeDocument, nsMgr);
            var messagingHeader = DeserializeMessagingHeader(envelopeDocument, nsMgr);
            var body = DeserializeBody(envelopeDocument, nsMgr);

            if (messagingHeader == null)
            {
                throw new InvalidMessageException("The envelopeStream does not contain a Messaging element");
            }

            AS4Message as4Message = await AS4Message.CreateAsync(envelopeDocument, contentType, securityHeader, messagingHeader, body);

            StreamUtilities.MovePositionToStreamStart(envelopeStream);

            return as4Message;
        }

        private void ValidateEnvelopeDocument(XmlDocument envelopeDocument)
        {
            var schemas = new XmlSchemaSet();
            XmlSchema schema = GetEnvelopeSchema();
            schemas.Add(schema);
            envelopeDocument.Schemas = schemas;

            envelopeDocument.Validate(
                (sender, args) => LogManager.GetCurrentClassLogger().Error($"Invalid ebMS Envelope Document: {args.Message}"));

            Logger.Debug("Valid ebMS Envelope Document");
        }

        private static XmlSchema __envelopeSchema;

        private static XmlSchema GetEnvelopeSchema()
        {
            if (__envelopeSchema == null)
            {
                using (var stringReader = new StringReader(Schemas.Soap12))
                {
                    __envelopeSchema = XmlSchema.Read(stringReader, (sender, args) => { });
                }
            }

            return __envelopeSchema;
        }

        private static XmlDocument LoadXmlDocument(Stream stream)
        {
            var document = new XmlDocument { PreserveWhitespace = true };
            document.Load(stream);

            return document;
        }

        private static XmlNamespaceManager GetNamespaceManagerForDocument(XmlDocument doc)
        {
            var nsMgr = new XmlNamespaceManager(doc.NameTable);

            nsMgr.AddNamespace("s", Constants.Namespaces.Soap12);
            nsMgr.AddNamespace("wsse", Constants.Namespaces.WssSecuritySecExt);
            nsMgr.AddNamespace("ds", Constants.Namespaces.XmlDsig);
            nsMgr.AddNamespace("xenc", Constants.Namespaces.XmlEnc);
            nsMgr.AddNamespace("eb3", Constants.Namespaces.EbmsXmlCore);

            return nsMgr;
        }

        private static SecurityHeader DeserializeSecurityHeader(XmlDocument envelopeDocument, XmlNamespaceManager nsMgr)
        {
            var securityHeader = envelopeDocument.SelectSingleNode("/s:Envelope/s:Header/wsse:Security", nsMgr) as XmlElement;

            if (securityHeader == null)
            {
                return new SecurityHeader();
            }

            return new SecurityHeader(securityHeader);
        }

        private static Messaging DeserializeMessagingHeader(XmlDocument document, XmlNamespaceManager nsMgr)
        {
            XmlNode messagingHeader = document.SelectSingleNode("/s:Envelope/s:Header/eb3:Messaging", nsMgr);

            if (messagingHeader == null)
            {
                return null;
            }

            var s = new XmlSerializer(typeof(Messaging), SoapEnvelopeBuilder.MessagingAttributeOverrides);
            return s.Deserialize(new XmlNodeReader(messagingHeader)) as Messaging;
        }
        
        internal static async Task<IEnumerable<MessageUnit>> GetMessageUnitsFromMessagingHeader(
            XmlDocument envelopeDocument, 
            Messaging messagingHeader)
        {
            if (messagingHeader.MessageUnits == null)
            {
                return Enumerable.Empty<MessageUnit>();
            }

            Maybe<RoutingInputUserMessage> routing = await GetRoutingUserMessageFromXml(envelopeDocument);
            MessageUnit ToMessageUnitModel(object u)
            {
                switch (u)
                {
                    case Xml.UserMessage _:
                        return AS4Mapper.Map<UserMessage>(u);
                    case Xml.SignalMessage s:
                        return ConvertSignalMessageFromXml(s, routing);
                    default:
                        throw new NotSupportedException(
                            $"AS4Message has unknown MessageUnit of type: {u.GetType()}");
                }
            }

            return messagingHeader.MessageUnits.Select(ToMessageUnitModel);
        }

        private static async Task<Maybe<RoutingInputUserMessage>> GetRoutingUserMessageFromXml(XmlDocument envelopeDocument)
        {
            XmlNode routingInputTag = envelopeDocument.SelectSingleNode(@"//*[local-name()='RoutingInput']");
            if (routingInputTag != null)
            {
                var routingInput = await AS4XmlSerializer.FromStringAsync<RoutingInput>(routingInputTag.OuterXml);
                if (routingInput?.UserMessage != null)
                {
                    return Maybe.Just(routingInput.UserMessage);
                }
            }

            return Maybe<RoutingInputUserMessage>.Nothing;
        }

        private static SignalMessage ConvertSignalMessageFromXml(Xml.SignalMessage signalMessage, Maybe<RoutingInputUserMessage> routing)
        {
            void AddRouting(IMappingOperationOptions opts)
            {
                routing.Do(r => opts.Items.Add(SignalMessage.RoutingInputKey, r));
            }

            if (signalMessage.Error != null)
            {
                return AS4Mapper.Map<Error>(signalMessage, AddRouting);
            }

            if (signalMessage.PullRequest != null)
            {
                return AS4Mapper.Map<PullRequest>(signalMessage);
            }

            if (signalMessage.Receipt != null)
            {
                return AS4Mapper.Map<Receipt>(signalMessage, AddRouting);
            }

            throw new NotSupportedException("Unable to map Xml.SignalMessage to SignalMessage");
        }

        private static Body1 DeserializeBody(XmlDocument envelopeDocument, XmlNamespaceManager nsMgr)
        {
            var bodyElement = envelopeDocument.SelectSingleNode("/s:Envelope/s:Body", nsMgr);

            if (bodyElement == null)
            {
                return null;
            }

            XmlSerializer s = new XmlSerializer(typeof(Body1));
            var result = s.Deserialize(new XmlNodeReader(bodyElement));

            return result as Body1;
        }
    }
}