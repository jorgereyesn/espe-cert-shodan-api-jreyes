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
    // local.map((item1) => console.log(item1.key));
    // console.log(data.vulns.length);
    // data.vulns.map((item) => console.log(item));
  };

  function encontrarVulns(data, vulns) {
    var val = [];
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i].vulns != "undefined") {
        val.push(data[i].vulns);
      }
    }
    // console.log(Object.keys(val[0]));

    for (let k = 0; k < vulns.length; k++) {
      console.log(vulns[k]);
      for (let j = 0; j < val.length; j++) {
        console.log(val[j][vulns[k]]);
      }
    }

    // for (let j = 0; j < val.length; j++) {
    //   console.log(Object.keys(val[j]));
    //   for(let k=0;k<vulns.length;k++){
    //     console.log(k-vulns[k]);
    //
    //     }
    //   }
    // }
    // console.log(val);
    // console.log(val.length);
    return val;
  }

  return (
    <div>
      <h1>SH API CONSUMER</h1>

      {typeof vuln.vulns != "undefined" ? (
        <>
          <p>ESTA IP TIENE VULNERABILIDADES</p>
        </>
      ) : (
        <p>ESTA IP NO TIENE VULNERABILIDADES</p>
      )}
    </div>
  );
};
export default ShodanData;
