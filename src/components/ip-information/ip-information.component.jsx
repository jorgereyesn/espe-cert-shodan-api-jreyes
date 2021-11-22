import React from "react";
import * as S from "./ip-information.styles";
import CveDetailsComponent from "../cve-details/cve-details.component";
import IpBannerComponent from "../ip-banner/ip-banner.component";

const IpInformationComponent = ({
  ip,
  data,
  org,
  isp,
  lastUpdate,
  country,
  city,
  asn,
  tags,
  ports,
  hostnames,
  domains,
}) => {
  return (
    <S.Accord>
      <S.AccordionSum>
        <IpBannerComponent
          ip={ip}
          numVulns={data.length}
          org={org}
          isp={isp}
          data={data}
          lastUpdate={`${lastUpdate?.substr(0, 10)} ${lastUpdate?.substr(
            11,
            8
          )}`}
          country={country}
          city={city}
          asn={asn}
          tags={tags}
          ports={ports}
          hostnames={hostnames}
          domains={domains}
        />
      </S.AccordionSum>
      {data.map((item, index) => (
        <S.AccordionDet key={`SHdata-${ip}` + index}>
          <CveDetailsComponent
            cve={item.cve}
            cvss={item.cvss}
            summary={item.summary}
            references={item.references}
          />
        </S.AccordionDet>
      ))}
    </S.Accord>
  );
};

export default IpInformationComponent;
