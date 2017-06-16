using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Eu.EDelivery.AS4.Common;
using Eu.EDelivery.AS4.Entities;
using Eu.EDelivery.AS4.Model.Core;
using Eu.EDelivery.AS4.Model.Internal;
using Eu.EDelivery.AS4.Model.PMode;
using Eu.EDelivery.AS4.Serialization;
using Eu.EDelivery.AS4.Steps;
using Eu.EDelivery.AS4.Steps.Receive;
using Eu.EDelivery.AS4.UnitTests.Common;
using Eu.EDelivery.AS4.UnitTests.Repositories;
using Xunit;

namespace Eu.EDelivery.AS4.UnitTests.Steps.Receive
{
    public class GivenUpdateReceivedMessageDatastoreFacts : GivenDatastoreStepFacts
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GivenUpdateReceivedMessageDatastoreFacts" /> class.
        /// </summary>
        public GivenUpdateReceivedMessageDatastoreFacts()
        {
            Step = new UpdateReceivedAS4MessageBodyStep(GetDataStoreContext, StubMessageBodyStore.Default);
        }

        /// <summary>
        /// Gets a <see cref="IStep" /> implementation to exercise the datastore.
        /// </summary>
        protected override IStep Step { get; }

        public class GivenReceivedReceiptMessage : GivenUpdateReceivedMessageDatastoreFacts
        {
            private const string EbmsMessageId = "some-messageid";

            [Fact]
            public async Task ThenOperationIsToBeNotified()
            {
                // Arrange
                InsertReceivedOutMessage();

                MessagingContext message = ReceiptAS4MessageWithSendingPMode(EbmsMessageId);
                await SaveReceiptFor(message);

                // Act
                await Step.ExecuteAsync(message, CancellationToken.None);

                // Assert
                InMessage inMessage = GetInMessageWithRefToMessageId(EbmsMessageId);
                Assert.NotNull(inMessage);
                Assert.Equal(Operation.ToBeNotified, inMessage.Operation);

                OutMessage outMessage = GetOutMessage(EbmsMessageId);
                Assert.NotNull(outMessage);
                Assert.Equal(OutStatus.Ack, outMessage.Status);
            }

            private static MessagingContext ReceiptAS4MessageWithSendingPMode(string refToMessageId)
            {
                var receipt = new Receipt {RefToMessageId = refToMessageId};

                AS4Message as4Message = AS4Message.Create(receipt);

                return new MessagingContext(as4Message, MessagingContextMode.Unknown) {SendingPMode = GetSendingPMode()};
            }

            [Fact]
            public async Task DoesntUpdateMessages_IfNoMessageLocationCanBeFound()
            {
                // Arrange
                InsertReceivedOutMessage("other message id");
                MessagingContext message = ReceiptAS4MessageWithSendingPMode(EbmsMessageId);
                
                // Act
                await Step.ExecuteAsync(message, CancellationToken.None);

                // Assert
                Assert.Null(GetOutMessage(EbmsMessageId));
                Assert.Null(GetInMessageWithRefToMessageId(EbmsMessageId));
            }

            private void InsertReceivedOutMessage(string messageId = EbmsMessageId)
            {
                using (DatastoreContext context = GetDataStoreContext())
                {
                    context.OutMessages.Add(new OutMessage {EbmsMessageId = messageId});
                    context.SaveChanges();
                }
            }
        }

        public class GivenReceivedErrorMessage : GivenUpdateReceivedMessageDatastoreFacts
        {
            private const string EbmsMessageId = "some-messageid";

            [Fact]
            public async Task ThenRelatedUserMessageStatusIsSetToNAck()
            {
                // Arrange
                await InsertOutMessageWith(EbmsMessageId);

                var message = new MessagingContext(CreateErrorAS4Message(EbmsMessageId), MessagingContextMode.Receive)
                {
                    SendingPMode = GetSendingPMode()
                };

                await SaveReceiptFor(message);

                // Act
                await Step.ExecuteAsync(message, CancellationToken.None);

                // Assert
                OutMessage outMessage = GetOutMessage(EbmsMessageId);
                Assert.NotNull(outMessage);
                Assert.Equal(OutStatus.Ack, outMessage.Status);
            }

            private async Task InsertOutMessageWith(string messageId)
            {
                using (DatastoreContext db = GetDataStoreContext())
                {
                    db.OutMessages.Add(await CreateOutMessage(messageId));
                    db.SaveChanges();
                }
            }

            private static AS4Message CreateErrorAS4Message(string refToMessageId)
            {
                var receipt = new Receipt {RefToMessageId = refToMessageId};

                return AS4Message.Create(receipt);
            }
        }

        private async Task SaveReceiptFor(MessagingContext context)
        {
            // The receipt needs to be saved first, since we're testing the update-step.
            var step = new SaveReceivedMessageStep(GetDataStoreContext, StubMessageBodyStore.Default);
            await step.ExecuteAsync(context, CancellationToken.None);
        }

        private static async Task<OutMessage> CreateOutMessage(string messageId)
        {
            return new OutMessage
            {
                EbmsMessageId = messageId,
                Status = OutStatus.Sent,
                Operation = Operation.NotApplicable,
                EbmsMessageType = MessageType.UserMessage,
                PMode = await AS4XmlSerializer.ToStringAsync(GetSendingPMode())
            };
        }

        private static SendingProcessingMode GetSendingPMode()
        {
            return new SendingProcessingMode
            {
                Id = "receive_agent_facts_pmode",
                ReceiptHandling = {NotifyMessageProducer = true},
                ErrorHandling = {NotifyMessageProducer = true}
            };
        }

        private InMessage GetInMessageWithRefToMessageId(string refToMessageId)
        {
            using (DatastoreContext db = GetDataStoreContext())
            {
                return db.InMessages.FirstOrDefault(m => m.EbmsRefToMessageId == refToMessageId);
            }
        }

        private OutMessage GetOutMessage(string messageId)
        {
            using (DatastoreContext db = GetDataStoreContext())
            {
                return db.OutMessages.FirstOrDefault(m => m.EbmsMessageId == messageId);
            }
        }
    }
}