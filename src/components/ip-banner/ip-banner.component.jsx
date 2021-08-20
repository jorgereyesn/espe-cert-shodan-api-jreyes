import React from "react";
import * as S from "./ip-banner.styles";
import ModalIpVulnsCvssComponent from "../modal-ip-vulns-cvss/modal-ip-vulns-cvss.component";

const IpBannerComponent = ({
  ip,
  numVulns,
  org,
  isp,
  data,
  lastUpdate,
  country,
  city,
}) => {
  let text = "";
  if (numVulns > 0) {
    text = `Se han detectado ${numVulns} vulnerabilidades`;
  } else {
    text = "No se han detectado vulnerabilidades";
  }
  return (
    <S.Wrapper>
      <S.DataGrid container justifyContent="center" alignItems="center">
        <S.DataGrid item xs={3}>
          <S.Ip>{ip}</S.Ip>
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          {text}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          org: {org}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          isp: {isp}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          Last_Update: {lastUpdate}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          Location: {country} - {city}
        </S.DataGrid>
        {numVulns > 0 && (
          <S.DataGrid item xs={3}>
            <ModalIpVulnsCvssComponent
              info={data}
              buttonName="RESUMEN CVSS +"
            />
          </S.DataGrid>
        )}
      </S.DataGrid>
    </S.Wrapper>
  );
};

export default IpBannerComponent;
