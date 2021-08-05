import React, { useEffect, useState } from "react";

const ShodanData = () => {
  const [vuln, setVuln] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    //192.188.58.99 sin vuln
    //192.188.58.61 con vuln
    const ip = "192.188.58.61";
    const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
    const url = "https://api.shodan.io/shodan/host/" + ip + "?key=" + apiKey;
    //https://api.shodan.io/shodan/host/192.188.58.61?key=FL5f6aSOu464esmyqf7c0kDDi0UycPNN
    const data = await (await fetch(url)).json();
    console.log(data);
    console.log(data.data.length);
    setVuln(data);
    const local = encontrarVulns(data.data, data.vulns);
    console.log(local);
    setData(local);
  };

  function encontrarVulns(data, vulns) {
    var val = [];
    var val1 = [];
    var count = 0;
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i].vulns != "undefined") {
        val.push(data[i].vulns);
      }
    }
    // console.log(Object.keys(val[0]));

    for (let k = 0; k < vulns.length; k++) {
      count = 0;
      console.log(vulns[k]);
      for (let j = 0; j < val.length; j++) {
        if (typeof val[j][vulns[k]] != "undefined") {
          if (vulns[k].index === val[j][vulns[k]].index && count < 1) {
            console.log(val[j][vulns[k]]);
            val[j][vulns[k]].cve = vulns[k];
            val1.push(val[j][vulns[k]]);
            count++;
          }
        }
      }
    }
    console.log(val1.length);
    return val1;
  }

  return (
    <div>
      <h1>SH API CONSUMER</h1>

      {typeof vuln.vulns != "undefined" ? (
        <>
          <p>ESTA IP TIENE VULNERABILIDADES</p>
          {data.map((item, index) => (
            <li key={index}>
              {item.cve}-{item.cvss}-{item.summary}
            </li>
          ))}
          {/*<table>*/}
          {/*  <tr>*/}
          {/*    <th>CVE</th>*/}
          {/*    <th>Detail</th>*/}
          {/*  </tr>*/}
          {/*  <tr>*/}
          {/*    {vuln.vulns.map((item, index) => (*/}
          {/*      <td key={index}>{item}</td>*/}
          {/*    ))}*/}
          {/*  </tr>*/}
          {/*</table>*/}
          {/*{vuln.vulns.map((item, index) => (*/}
          {/*  <li key={index}>{item}</li>*/}
          {/*))}*/}
          {/*{data.map((item1, index) => (*/}
          {/*  <li key={index}>*/}
          {/*    {item1.cvss}-{item1.summary}*/}
          {/*  </li>*/}
          {/*))}*/}
        </>
      ) : (
        <p>ESTA IP NO TIENE VULNERABILIDADES</p>
      )}
    </div>
  );
};
export default ShodanData;
