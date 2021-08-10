import React from "react";
import * as S from "./ip-information.styles";
import CveDetailsComponent from "../cve-details/cve-details.component";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const IpInformationComponent = ({ ip, vulns }) => {
  return (
    <S.Accord>
      <S.AccordionSum>{ip}</S.AccordionSum>
      {vulns.map((item, index) => (
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
