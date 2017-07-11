﻿using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Eu.EDelivery.AS4.Common;
using Eu.EDelivery.AS4.Entities;
using Eu.EDelivery.AS4.Model.Core;
using Eu.EDelivery.AS4.Model.Internal;
using Eu.EDelivery.AS4.Model.PMode;
using Eu.EDelivery.AS4.Repositories;
using NLog;

namespace Eu.EDelivery.AS4.Steps.Send
{
    /// <summary>
    /// Describes how the state and configuration on the retry mechanism of reception awareness is stored
    /// </summary>
    public class SetReceptionAwarenessStep : IStep
    {
        private static readonly ILogger Logger = LogManager.GetCurrentClassLogger();

        /// <summary>
        /// Start configuring Reception Awareness
        /// </summary>
        /// <param name="messagingContext"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public async Task<StepResult> ExecuteAsync(MessagingContext messagingContext, CancellationToken cancellationToken)
        {
            if (!IsReceptionAwarenessEnabled(messagingContext))
            {
                string pmodeId = messagingContext.SendingPMode.Id;
                return await ReturnSameResult(messagingContext, $"Reception Awareness is not enabled in Sending PMode {pmodeId}");
            }

            await InsertReceptionAwarenessAsync(messagingContext).ConfigureAwait(false);
            return await StepResult.SuccessAsync(messagingContext);
        }

        private static bool IsReceptionAwarenessEnabled(MessagingContext messagingContext)
        {
            return messagingContext.SendingPMode.Reliability?.ReceptionAwareness?.IsEnabled == true;
        }

        private static async Task<StepResult> ReturnSameResult(MessagingContext messagingContext, string description)
        {
            Logger.Info($"{messagingContext.Prefix} {description}");
            return await StepResult.SuccessAsync(messagingContext);
        }

        private static async Task InsertReceptionAwarenessAsync(MessagingContext messagingContext)
        {
            Logger.Info($"{messagingContext.Prefix} Set Reception Awareness");
            AS4Message as4Message = messagingContext.AS4Message;

            using (DatastoreContext context = Registry.Instance.CreateDatastoreContext())
            {
                var repository = new DatastoreRepository(context);

                Entities.ReceptionAwareness[] existingReceptionAwarenessEntities =
                    repository.GetReceptionAwareness(as4Message.MessageIds).ToArray();
                
                // For every MessageId for which no ReceptionAwareness entity exists, create one.
                InsertReceptionAwarenessForMessages(messagingContext, repository, existingReceptionAwarenessEntities);

                await context.SaveChangesAsync().ConfigureAwait(false);
            }
        }
       
        private static void InsertReceptionAwarenessForMessages(
            MessagingContext message,
            IDatastoreRepository repository,
            IEnumerable<Entities.ReceptionAwareness> existingReceptionAwarenessEntities)
        {
            AS4Message as4Message = message.AS4Message;
            IEnumerable<string> existingIds = existingReceptionAwarenessEntities.Select(r => r.InternalMessageId);
            IEnumerable<string> messageIdsWithoutReceptionAwareness = as4Message.MessageIds.Where(id => existingIds.Contains(id) == false);

            foreach (string messageId in messageIdsWithoutReceptionAwareness)
            {
                Entities.ReceptionAwareness receptionAwareness = CreateReceptionAwareness(messageId, message.SendingPMode);
                repository.InsertReceptionAwareness(receptionAwareness);
            }
        }

        private static Entities.ReceptionAwareness CreateReceptionAwareness(string messageId, SendingProcessingMode pmode)
        {
            // The Message hasn't been sent yet, so set the currentretrycount to -1 and the lastsendtime to null.
            // The SendMessageStep will update those values once the message has in fact been sent.
            return new Entities.ReceptionAwareness
            {
                InternalMessageId = messageId,
                CurrentRetryCount = -1,
                TotalRetryCount = pmode.Reliability.ReceptionAwareness.RetryCount,
                RetryInterval = pmode.Reliability.ReceptionAwareness.RetryInterval,
                LastSendTime = null,
                Status = ReceptionStatus.Pending
            };
        }
    }
}