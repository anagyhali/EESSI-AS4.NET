﻿using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Xml;

namespace Eu.EDelivery.AS4.Security.Repositories
{
    /// <summary>
    /// Respository to navigate the Reference ID Xml Elements
    /// </summary>
    public class XmlReferenceRepository
    {
        private readonly XmlDocument _document;
        private readonly string[] _allowedIdNodeNames;

        /// <summary>
        /// Initializes a new instance of the <see cref="XmlReferenceRepository"/> class
        /// </summary>
        /// <param name="document"></param>
        public XmlReferenceRepository(XmlDocument document)
        {
            this._document = document;
            this._allowedIdNodeNames = new[] {"Id", "id", "ID"};
        }

        /// <summary>
        /// Get the <see cref="XmlElement"/> which 
        /// references the given <paramref name="id"/>
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public XmlElement GetReferenceIdElement(string id)
        {
            foreach (string idNodeName in this._allowedIdNodeNames)
            {
                List<XmlElement> matchingNodes = FindIdElements(id, idNodeName);
                if (MatchingNodesIsNotPopulated(matchingNodes)) continue;

                return matchingNodes.Single();
            }
            return null;
        }

        private List<XmlElement> FindIdElements(string idValue, string idNodeName)
        {
            string xpath = $"//*[@*[local-name()='{idNodeName}' and " +
                           $"namespace-uri()='{Constants.Namespaces.WssSecurityUtility}' and .='{idValue}']]";

            return this._document.SelectNodes(xpath).Cast<XmlElement>().ToList();
        }

        private bool MatchingNodesIsNotPopulated(IReadOnlyCollection<XmlElement> matchingNodes)
        {
            if (matchingNodes.Count <= 0) return true;
            if (matchingNodes.Count >= 2)
                throw new CryptographicException("Malformed reference element.");

            return false;
        }
    }
}