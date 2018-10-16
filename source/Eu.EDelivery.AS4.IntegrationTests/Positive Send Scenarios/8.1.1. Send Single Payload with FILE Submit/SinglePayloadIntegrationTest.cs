﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Eu.EDelivery.AS4.IntegrationTests.Common;
using Xunit;

namespace Eu.EDelivery.AS4.IntegrationTests.Positive_Send_Scenarios._8._1._1._Send_Single_Payload_with_FILE_Submit
{
    /// <summary>
    /// Testing the Application with a Single Payload
    /// </summary>
    public class SinglePayloadIntegrationTest : IntegrationTestTemplate
    {                       
        [Fact]
        public void ThenSendingSinglePayloadSucceeds()
        {
            // Before
            AS4Component.Start();

            // Arrange
            Holodeck.CopyPModeToHolodeckB("8.1.1-pmode.xml");

            // Act
            AS4Component.PutMessage("8.1.1-sample.xml");        

            // Assert
            bool areFilesFound = PollingAt(AS4ReceiptsPath);
            if (areFilesFound)
            {
                Console.WriteLine(@"Single Payload Integration Test succeeded!");
            }

            Assert.True(areFilesFound, "Send Single Payload failed");
        }

        protected override void ValidatePolledFiles(IEnumerable<FileInfo> files)
        {
            // Assert
            AssertPayload();
            AssertReceipt();
        }

        private static void AssertPayload()
        {
            FileInfo receivedPayload = new DirectoryInfo(Holodeck.HolodeckBLocations.InputPath).GetFiles("*.jpg").FirstOrDefault();
            FileInfo sendPayload = AS4Component.SubmitSinglePayloadImage;

            Assert.NotNull(receivedPayload);
            Assert.Equal(sendPayload.Length, receivedPayload.Length);
        }

        private static void AssertReceipt()
        {
            FileInfo receipt = new DirectoryInfo(AS4ReceiptsPath).GetFiles("*.xml").FirstOrDefault();

            Assert.NotNull(receipt);
        }
    }
}