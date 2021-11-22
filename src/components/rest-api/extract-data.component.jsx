import { useEffect, useState } from "react";
import { extractVulns } from "../../util";

//https://api.shodan.io/shodan/host/192.188.58.61?key=FL5f6aSOu464esmyqf7c0kDDi0UycPNN

export const ExtractData = (ip) => {
  const [vuln, setVuln] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
    const url = "https://api.shodan.io/shodan/host/" + ip + "?key=" + apiKey;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          if (typeof result.vulns != "undefined") {
            setVuln(result);
            const local = extractVulns(result.data, result.vulns);
            setData(local);
          }
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          // setIsLoaded(true);
          console.log(error);
        }
      );
  }, []);

  // useEffect(() => {
  //   const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
  //   const ips = [
  //     "192.188.58.61",
  //     "192.188.58.50",
  //     "192.188.58.45",
  //     "192.188.58.59",
  //     "192.188.58.63",
  //     "192.188.58.78",
  //     "192.188.58.76",
  //     "192.188.58.180",
  //     "192.188.58.75",
  //   ];
  //   ips.map((item) => {
  //     const url =
  //       "https://api.shodan.io/shodan/host/" + item + "?key=" + apiKey;
  //     console.log(url);
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then(
  //         (result) => {
  //           // setIsLoaded(true);
  //           setVuln(result);
  //           console.log(result);
  //           if (typeof result.vulns != "undefined") {
  //             const local = encontrarVulns(result.data, result.vulns);
  //             console.log(local);
  //             setData(local);
  //           }
  //         },
  //         // Nota: es importante manejar errores aquí y no en
  //         // un bloque catch() para que no interceptemos errores
  //         // de errores reales en los componentes.
  //         (error) => {
  //           // setIsLoaded(true);
  //           console.log(error);
  //         }
  //       );
  //   });
  // }, []);

  // function encontrarVulns(data, vulns) {
  //   var val = [];
  //   var val1 = [];
  //   var count = 0;
  //   for (let i = 0; i < data.length; i++) {
  //     if (typeof data[i].vulns != "undefined") {
  //       val.push(data[i].vulns);
  //     }
  //   }
  //   // console.log(Object.keys(val[0]));
  //   for (let k = 0; k < vulns.length; k++) {
  //     count = 0;
  //     // console.log(vulns[k]);
  //     for (let j = 0; j < val.length; j++) {
  //       if (typeof val[j][vulns[k]] != "undefined") {
  //         if (vulns[k].index === val[j][vulns[k]].index && count < 1) {
  //           // console.log(val[j][vulns[k]]);
  //           val[j][vulns[k]].cve = vulns[k];
  //           val1.push(val[j][vulns[k]]);
  //           count++;
  //         }
  //       }
  //     }
  //   }
  //   // console.log(val1.length);
  //   return val1;
  // }

  return { vuln, data };
};
