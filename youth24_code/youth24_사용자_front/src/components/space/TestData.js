import React, { useState, useEffect } from 'react';

function TestData() {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
    <spacesInfo>
       <totalCnt>177</totalCnt>
       <pageIndex>1</pageIndex>
       <space>
          <rownum>1</rownum>
          <spcId>201808220002</spcId>
          <spcName><![CDATA[2030청년창업지원센터]]></spcName>
       </space>
       <space>
          <rownum>2</rownum>
          <spcId>201902210005</spcId>
          <spcName><![CDATA[JOB+공간더하기]]></spcName>
       </space>
       <space>
          <rownum>3</rownum>
          <spcId>201808230002</spcId>
          <spcName><![CDATA[LH남부권주거복지지사]]></spcName>
       </space>
       <space>
          <rownum>4</rownum>
          <spcId>202008100001</spcId>
          <spcName><![CDATA[강남 1인가구 커뮤니티센터 STAY.G]]></spcName>
       </space>
     </spacesInfo>`;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const spaceNodes = xmlDoc.getElementsByTagName('space');

    const spaces = [];
    for (let i = 0; i < spaceNodes.length; i++) {
      const space = {
        rownum: spaceNodes[i].getElementsByTagName('rownum')[0].textContent,
        spcId: spaceNodes[i].getElementsByTagName('spcId')[0].textContent,
        spcName: spaceNodes[i].getElementsByTagName('spcName')[0].textContent,
      };
      spaces.push(space);
    }

    setSpaces(spaces);
  }, []);

  return (
    <div>
      <h2>Spaces List</h2>
      <ul>
        {spaces.map((space) => (
          <li key={space.spcId}>
            {space.rownum}: {space.spcName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestData;
