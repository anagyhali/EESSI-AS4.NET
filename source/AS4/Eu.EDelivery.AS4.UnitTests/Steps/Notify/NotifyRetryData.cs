﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Eu.EDelivery.AS4.Common;
using Eu.EDelivery.AS4.Entities;
using Eu.EDelivery.AS4.Strategies.Sender;
using Eu.EDelivery.AS4.UnitTests.Repositories;

namespace Eu.EDelivery.AS4.UnitTests.Steps.Notify
{
    public class NotifyRetryData : IEnumerable<object[]>
    {
        private static readonly IEnumerable<object> Retries = new[]
        {
            new NotifyRetry(
                currentRetryCount: 1,
                maxRetryCount: 3,
                sendResult: SendResult.Success,
                expectedCurrentRetryCount: 1,
                expectedOperation: Operation.Notified),
            new NotifyRetry(
                currentRetryCount: 1,
                maxRetryCount: 3,
                sendResult: SendResult.RetryableFail,
                expectedCurrentRetryCount: 2,
                expectedOperation: Operation.ToBeRetried),
            new NotifyRetry(
                currentRetryCount: 1,
                maxRetryCount: 3,
                sendResult: SendResult.FatalFail,
                expectedCurrentRetryCount: 1,
                expectedOperation: Operation.DeadLettered),
            new NotifyRetry(
                currentRetryCount: 3,
                maxRetryCount: 3,
                sendResult: SendResult.RetryableFail,
                expectedCurrentRetryCount: 3,
                expectedOperation: Operation.DeadLettered),
            new NotifyRetry(
                currentRetryCount: 3,
                maxRetryCount: 3,
                sendResult: SendResult.FatalFail,
                expectedCurrentRetryCount: 3,
                expectedOperation: Operation.DeadLettered)

        };

        private static readonly IEnumerable<object> Types = new object[]
        {
            new NotifyType<InMessage>(
                insertion: factory => (ebmsMessageId, current, max) =>
                {
                    var m = new InMessage(ebmsMessageId)
                    {
                        CurrentRetryCount = current,
                        MaxRetryCount = max
                    };

                    m.SetOperation(Operation.ToBeNotified);
                    m.SetStatus(InStatus.Created);

                    return factory.InsertInMessage(m);

                },
                assertion: factory => factory.AssertInMessage,
                getter: entity => (entity.CurrentRetryCount, entity.Operation)),
            new NotifyType<OutMessage>(
                insertion: factory => (ebmsMessageId, current, max) =>
                {
                    var m = new OutMessage(ebmsMessageId)
                    {
                        CurrentRetryCount = current,
                        MaxRetryCount = max
                    };

                    m.SetOperation(Operation.ToBeNotified);
                    m.SetStatus(OutStatus.Created);

                    return factory.InsertOutMessage(m, withReceptionAwareness: false);
                },
                assertion: factory => factory.AssertOutMessage,
                getter: entity => (entity.CurrentRetryCount, entity.Operation)),
            new NotifyType<InException>(
                insertion: factory => (refToMessageId, current, max) =>
                {
                    var ex = new InException(refToMessageId, "some error message")
                    {
                        CurrentRetryCount = current,
                        MaxRetryCount = max
                    };

                    ex.SetOperation(Operation.ToBeNotified);
                    return factory.InsertInException(ex);
                },
                assertion: factory => factory.AssertInException,
                getter: entity => (entity.CurrentRetryCount, entity.Operation)),
            new NotifyType<OutException>(
                insertion: factory => (refToMessageId, current, max) =>
                {
                    var ex = new OutException(refToMessageId, "some error message")
                    {
                        CurrentRetryCount = current,
                        MaxRetryCount = max
                    };

                    ex.SetOperation(Operation.ToBeNotified);
                    return factory.InsertOutException(ex);
                },
                assertion: factory => factory.AssertOutException,
                getter: entity => (entity.CurrentRetryCount, entity.Operation))
        };

        private static IEnumerable<object[]> Inputs
        {
            get
            {
                return Retries
                       .Select(r => (retry: r, types: Types))
                       .SelectMany(t => t.types.Select(x => new[] { t.retry, x }));
            }
        }

        /// <summary>
        /// Returns an enumerator that iterates through the collection.
        /// </summary>
        /// <returns>An enumerator that can be used to iterate through the collection.</returns>
        public IEnumerator<object[]> GetEnumerator()
        {
            return Inputs.GetEnumerator();
        }

        /// <summary>
        /// Returns an enumerator that iterates through a collection.
        /// </summary>
        /// <returns>An <see cref="T:System.Collections.IEnumerator" /> object that can be used to iterate through the collection.</returns>
        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }

    public class NotifyRetry
    {
        public NotifyRetry(
            int currentRetryCount,
            int maxRetryCount,
            SendResult sendResult,
            int expectedCurrentRetryCount,
            Operation expectedOperation)
        {
            CurrentRetryCount = currentRetryCount;
            MaxRetryCount = maxRetryCount;
            SendResult = sendResult;
            ExpectedCurrentRetryCount = expectedCurrentRetryCount;
            ExpectedOperation = expectedOperation;
        }

        public int CurrentRetryCount { get; }

        public int MaxRetryCount { get; }

        public SendResult SendResult { get; }

        public int ExpectedCurrentRetryCount { get; }

        public Operation ExpectedOperation { get; }
    }

    public class NotifyType<T> where T : Entity
    {
        public NotifyType(
            Func<Func<DatastoreContext>, Func<string, int, int, T>> insertion,
            Func<Func<DatastoreContext>, Action<string, Action<T>>> assertion,
            Func<T, (int, string)> getter)
        {
            Insertion = insertion;
            Assertion = assertion;
            Getter = getter;
        }

        public Func<Func<DatastoreContext>, Func<string, int, int, T>> Insertion { get; }

        public Func<Func<DatastoreContext>, Action<string, Action<T>>> Assertion { get; }

        public Func<T, (int, string)> Getter { get; }
    }
}