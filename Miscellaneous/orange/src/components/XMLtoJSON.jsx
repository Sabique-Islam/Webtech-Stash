import React, { useState } from 'react';
import './XMLtoJSON.css';

function XMLtoJSON() {
  const [jsonResult, setJsonResult] = useState(null);

  const sampleXML = `<?xml version="1.0" encoding="UTF-8"?>
<booking>
  <booking_id>BK123456</booking_id>
  <customer>
    <name>John Doe</name>
    <email>john.doe@email.com</email>
    <phone>+1-555-0123</phone>
  </customer>
  <flight>
    <airline>SkyLine Airways</airline>
    <flight_number>SL789</flight_number>
    <departure>
      <airport>JFK</airport>
      <city>New York</city>
      <date>2024-12-15</date>
      <time>14:30</time>
    </departure>
    <arrival>
      <airport>CDG</airport>
      <city>Paris</city>
      <date>2024-12-16</date>
      <time>03:45</time>
    </arrival>
  </flight>
  <hotel>
    <name>Grand Hotel Paris</name>
    <check_in>2024-12-16</check_in>
    <check_out>2024-12-20</check_out>
    <room_type>Deluxe Suite</room_type>
  </hotel>
  <total_cost currency="USD">2500.00</total_cost>
</booking>`;

  const convertXMLtoJSON = () => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(sampleXML, "text/xml");
    
    const xmlToJson = (xml) => {
      let obj = {};
      
      if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
          for (let j = 0; j < xml.attributes.length; j++) {
            const attribute = xml.attributes.item(j);
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType === 3) {
        obj = xml.nodeValue;
      }
      
      if (xml.hasChildNodes()) {
        for (let i = 0; i < xml.childNodes.length; i++) {
          const item = xml.childNodes.item(i);
          const nodeName = item.nodeName;
          
          if (typeof obj[nodeName] === "undefined") {
            obj[nodeName] = xmlToJson(item);
          } else {
            if (typeof obj[nodeName].push === "undefined") {
              const old = obj[nodeName];
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(xmlToJson(item));
          }
        }
      }
      return obj;
    };
    
    const result = xmlToJson(xmlDoc);
    setJsonResult(result);
  };

  return (
    <div className="xml-json-container">
      <h2 className="xml-title">XML to JSON Converter</h2>
      
      <div className="converter-content">
        <div className="xml-section">
          <h3>Sample Booking XML</h3>
          <pre className="xml-content">{sampleXML}</pre>
          <button className="convert-btn" onClick={convertXMLtoJSON}>
            Convert Booking XML
          </button>
        </div>

        {jsonResult && (
          <div className="json-section">
            <h3>Converted JSON</h3>
            <pre className="json-content">
              {JSON.stringify(jsonResult, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default XMLtoJSON
