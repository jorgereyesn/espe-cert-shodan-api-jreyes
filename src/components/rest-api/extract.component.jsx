import { useEffect, useState } from "react";

import React from "react";
import DashboardComponent from "../../Layouts/Dashboard/dashboard.component";
import ShodanData from "../../Layouts/ShodanData/shodan-data.component";

const ExtractComponent = () => {
  const [vuln, setVuln] = useState([]);
  const [data, setData] = useState([]);

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
    return val1;
  }

  useEffect(() => {
    async function getData() {
      const data = await (
        await fetch(
          "https://api.shodan.io/shodan/host/192.188.58.50?key=FL5f6aSOu464esmyqf7c0kDDi0UycPNN"
        )
      ).json();
      // console.log(data);
      setVuln(data);
      if (typeof data.vulns != "undefined") {
        const local = encontrarVulns(data.data, data.vulns);
        setData(local);
      }
    }

    getData();
  }, []);
  const info = { vuln, data };

  return (
    <>
      <DashboardComponent info={info} />
      <ShodanData info={info} />
    </>
  );
};

export default ExtractComponent;
