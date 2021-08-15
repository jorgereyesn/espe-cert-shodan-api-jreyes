import React from "react";
import * as S from "./shodan-data.styles";
import IpInformationComponent from "../../components/ip-information/ip-information.component";

const ShodanDataComponent = ({ info }) => {
  return (
    <S.Wrapper>
      <S.Title>SHODAN DATA</S.Title>
      {info.map((item, index) =>
        typeof item.vuln.vulns != "undefined" ? (
          <>
            <IpInformationComponent
              key={index}
              ip={item.vuln.ip_str}
              data={item.data}
              org={item.vuln.org}
              isp={item.vuln.isp}
            />
          </>
        ) : (
          <>
            <IpInformationComponent
              key={index}
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
export default ShodanDataComponent;
