import React from "react";
import { ExtractData } from "../rest-api/extract-data.component";
import * as S from "./shodan-data.styles";
import IpInformationComponent from "../ip-information/ip-information.component";
import uuid from "react-uuid";

const ShodanData = () => {
  const ips = ["192.188.58.99", "192.188.58.61"];
  // ips.map((item) => console.log(item));
  console.log(ips.length);
  // ips.map((item) => console.log(item));
  const info = ips.map((item) => ExtractData(item));
  // info.map((item) => console.log(item.data, item.vuln));
  // console.log(locura.length);
  // const info = ExtractData("192.188.58.61");

  return (
    <S.Wrapper>
      <S.Title>SHODAN DATA</S.Title>
      {info.map((item, index) =>
        typeof item.vuln.vulns != "undefined" ? (
          <>
            <IpInformationComponent
              key={uuid()}
              ip={item.vuln.ip_str}
              data={item.data}
              org={item.vuln.org}
              isp={item.vuln.isp}
            />
          </>
        ) : (
          <>
            <IpInformationComponent
              key={uuid()}
              ip={item.vuln.ip_str}
              data={[]}
              org={item.vuln.org}
              isp={item.vuln.isp}
            />
          </>
        )
      )}
    </S.Wrapper>
  );
};
export default ShodanData;
