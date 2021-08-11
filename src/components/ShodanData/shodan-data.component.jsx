import React from "react";
import { ExtractData } from "../rest-api/extract-data.component";
import * as S from "./shodan-data.styles";
import IpInformationComponent from "../ip-information/ip-information.component";

const ShodanData = () => {
  // const [vuln, setVuln] = useState([]);
  // const [data, setData] = useState([]);
  //
  // useEffect(() => {
  //   getData();
  // }, []);
  //
  // const getData = async () => {
  //   //192.188.58.99 sin vuln
  //   //192.188.58.61 con vuln
  //   const ip = "192.188.58.61";
  //   const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
  //   const url = "https://api.shodan.io/shodan/host/" + ip + "?key=" + apiKey;
  //   //https://api.shodan.io/shodan/host/192.188.58.61?key=FL5f6aSOu464esmyqf7c0kDDi0UycPNN
  //   const data = await (await fetch(url)).json();
  //   console.log(data);
  //   console.log(data.data.length);
  //   setVuln(data);
  //   if (typeof data.vulns != "undefined") {
  //     const local = encontrarVulns(data.data, data.vulns);
  //     console.log(local);
  //     setData(local);
  //   }
  // };
  //
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
  //
  //   for (let k = 0; k < vulns.length; k++) {
  //     count = 0;
  //     console.log(vulns[k]);
  //     for (let j = 0; j < val.length; j++) {
  //       if (typeof val[j][vulns[k]] != "undefined") {
  //         if (vulns[k].index === val[j][vulns[k]].index && count < 1) {
  //           console.log(val[j][vulns[k]]);
  //           val[j][vulns[k]].cve = vulns[k];
  //           val1.push(val[j][vulns[k]]);
  //           count++;
  //         }
  //       }
  //     }
  //   }
  //   console.log(val1.length);
  //   return val1;
  // }
  const ips = [
    "192.188.58.99",
    "192.188.58.61",
    "192.188.58.70",
    "192.188.58.63",
    "192.188.58.50",
  ];
  // ips.map((item) => console.log(item));
  // console.log(ips.length);
  var info = ips.map((item) => ExtractData(item));
  // info.map((item) => console.log(item.data, item.vuln));
  // console.log(locura.length);
  // const info = ExtractData("192.188.58.61");

  return (
    <S.Wrapper>
      <S.Title>SHODAN DATA</S.Title>
      {info.map((item) =>
        typeof item.vuln.vulns != "undefined" ? (
          <>
            <IpInformationComponent
              ip={item.vuln.ip_str}
              vulns={item.data}
              org={item.vuln.org}
              isp={item.vuln.isp}
            />
          </>
        ) : (
          <>
            <IpInformationComponent
              ip={item.vuln.ip_str}
              vulns={[]}
              org={item.vuln.org}
              isp={item.vuln.isp}
            />
          </>
        )
      )}

      {/*<S.Title>SHODAN DATA</S.Title>*/}
      {/*{typeof info.vuln.vulns != "undefined" ? (*/}
      {/*  <>*/}
      {/*    <IpInformationComponent*/}
      {/*      ip={info.vuln.ip_str}*/}
      {/*      vulns={info.data}*/}
      {/*      org={info.vuln.org}*/}
      {/*      isp={info.vuln.isp}*/}
      {/*    />*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <IpInformationComponent*/}
      {/*      ip={info.vuln.ip_str}*/}
      {/*      vulns={[]}*/}
      {/*      org={info.vuln.org}*/}
      {/*      isp={info.vuln.isp}*/}
      {/*    />*/}
      {/*  </>*/}
      {/*)}*/}
    </S.Wrapper>
  );
};
export default ShodanData;
