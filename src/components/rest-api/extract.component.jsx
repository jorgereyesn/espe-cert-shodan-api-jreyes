// import { useEffect, useState } from "react";
//
// import React from "react";
// import DashboardComponent from "../../Layouts/Dashboard/dashboard.component";
// import ShodanData from "../../Layouts/ShodanData/shodan-data.component";
//
// const ExtractComponent = () => {
//   const [vulnerabilities, setVulnerabilities] = useState([]);
//   const [shodanData, setShodanData] = useState([]);
//
//   //EXTRACCION DE DATA DE VULNERABILIDADES
//   function encontrarVulns(data, vulns) {
//     var val = [];
//     var val1 = [];
//     var count = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (typeof data[i].vulns != "undefined") {
//         val.push(data[i].vulns);
//       }
//     }
//
//     for (let k = 0; k < vulns.length; k++) {
//       count = 0;
//       for (let j = 0; j < val.length; j++) {
//         if (typeof val[j][vulns[k]] != "undefined") {
//           if (vulns[k].index === val[j][vulns[k]].index && count < 1) {
//             val[j][vulns[k]].cve = vulns[k];
//             val1.push(val[j][vulns[k]]);
//             count++;
//           }
//         }
//       }
//     }
//     return val1;
//   }
//
//   //CONEXION CON API
//   useEffect(() => {
//     const ips = [
//       "192.188.58.99",
//       "192.188.58.61",
//       "192.188.58.50",
//       "192.188.58.45",
//     ];
//     const getData = async (value) => {
//       //DATOS PARA SOLICITAR INFORMACION A SHODAN
//       const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
//       const url =
//         "https://api.shodan.io/shodan/host/" + value + "?key=" + apiKey;
//
//       //SOLICITUD SHODAN
//       const content = await (await fetch(url)).json();
//
//       //SE ENVIA EL CONTENIDO DE LA IP
//       setShodanData(content);
//       // console.log(content);
//
//       //SE EXTRAE LA INFO RELACIONADA CON VULNERABILIDADES
//       if (content?.vulns) {
//         const data = encontrarVulns(content.data, content.vulns);
//         setShodanData(data);
//         // console.log(data);
//       }
//     };
//
//     ips.map((item) => getData(item));
//   }, []);
//
//   console.log(shodanData);
//
//   return <>HOLA</>;
// };
//
// export default ExtractComponent;
