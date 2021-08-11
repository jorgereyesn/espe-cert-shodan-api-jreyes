import { useEffect, useState } from "react";

export function ExtractData(ip) {
  const [vuln, setVuln] = useState([]);
  const [data, setData] = useState([]);
  // console.log(ip);

  useEffect(() => {
    // getData();
    const getData = async () => {
      const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
      const url = "https://api.shodan.io/shodan/host/" + ip + "?key=" + apiKey;
      const data = await (await fetch(url)).json();
      setVuln(data);
      if (typeof data.vulns != "undefined") {
        const local = encontrarVulns(data.data, data.vulns);
        setData(local);
      }
    };
    getData();
  }, [ip]);

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
      // console.log(vulns[k]);
      for (let j = 0; j < val.length; j++) {
        if (typeof val[j][vulns[k]] != "undefined") {
          if (vulns[k].index === val[j][vulns[k]].index && count < 1) {
            // console.log(val[j][vulns[k]]);
            val[j][vulns[k]].cve = vulns[k];
            val1.push(val[j][vulns[k]]);
            count++;
          }
        }
      }
    }
    // console.log(val1.length);
    return val1;
  }

  return { vuln, data };
}
