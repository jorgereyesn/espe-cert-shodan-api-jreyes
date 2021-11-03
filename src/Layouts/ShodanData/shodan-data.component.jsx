import React from "react";
import * as S from "./shodan-data.styles";
import IpInformationComponent from "../../components/ip-information/ip-information.component";

const ShodanDataComponent = ({ info }) => {
  return (
    <S.Wrapper>
      {info.map((item, index) =>
        typeof item.vuln.vulns != "undefined" ? (
          <>
            <IpInformationComponent
              key={`sh` - index - item.vuln.ip_str}
              ip={item.vuln.ip_str}
              data={item.data}
              org={item.vuln.org}
              isp={item.vuln.isp}
              lastUpdate={item.vuln.last_update}
              country={item.vuln.country_name}
              city={item.vuln.city}
              asn={item.vuln.asn}
              tags={item.vuln.tags}
              ports={item.vuln.ports}
              hostnames={item.vuln.hostnames}
              domains={item.vuln.domains}
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
              lastUpdate={item.vuln.last_update}
              country={item.vuln.country_name}
              city={item.vuln.city}
              asn={item.vuln.asn}
              tags={item.vuln.tags}
              ports={item.vuln.ports}
              hostnames={item.vuln.hostnames}
              domains={item.vuln.domains}
            />
          </>
        )
      )}
    </S.Wrapper>
  );
};
export default ShodanDataComponent;
