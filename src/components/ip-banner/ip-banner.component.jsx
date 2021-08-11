import React from "react";
import * as S from "./ip-banner.styles";

const IpBannerComponent = ({ ip, numVulns, org, isp }) => {
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
      </S.DataGrid>
    </S.Wrapper>
  );
};

export default IpBannerComponent;
