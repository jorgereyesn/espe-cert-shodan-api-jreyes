import React from "react";
import * as S from "./ip-information.styles";
import CveDetailsComponent from "../cve-details/cve-details.component";
import IpBannerComponent from "../ip-banner/ip-banner.component";

const IpInformationComponent = ({ ip, data, org, isp }) => {
  return (
    <S.Accord>
      <S.AccordionSum>
        <IpBannerComponent ip={ip} numVulns={data.length} org={org} isp={isp} />
      </S.AccordionSum>
      {data.map((item, index) => (
        <S.AccordionDet key={index}>
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