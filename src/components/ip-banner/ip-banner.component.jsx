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
  asn,
  tags,
  ports,
  hostnames,
  domains,
}) => {
  let text = "";
  if (numVulns > 0) {
    text = `${numVulns} vulnerabilities have been detected`;
  } else {
    text = "No vulnerabilities have been detected";
  }
  // console.log(tags);
  return (
    <S.Wrapper>
      <S.DataGridContainer
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <S.DataGrid item xs={3}>
          <S.Ip>IP: {ip}</S.Ip>
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          {text}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          ORG: {org}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          ISP: {isp}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          Last_Update: {lastUpdate}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          Location: {country} - {city}
        </S.DataGrid>
        <S.DataGrid item xs={3}>
          ASN: {asn}
        </S.DataGrid>
        {tags && (
          <S.DataGrid item xs={3}>
            Tags:{" "}
            {tags.map((item, index) => (
              <S.Tags key={item + index}>{item}</S.Tags>
            ))}
          </S.DataGrid>
        )}
        {ports && (
          <S.DataGrid item xs={3}>
            Ports:{" "}
            {ports.map((item, index) => (
              <S.Link
                href={`https://` + ip + ":" + item}
                target="_blank"
                key={item + index}
              >
                {item}
              </S.Link>
              // <S.Tags>{item}</S.Tags>
            ))}
          </S.DataGrid>
        )}
        {hostnames && (
          <S.DataGrid item xs={3}>
            Hostnames:{" "}
            {hostnames.map((item, index) => (
              <S.Link
                href={`https://` + item}
                target="_blank"
                key={item + index}
              >
                {item}
              </S.Link>
            ))}
          </S.DataGrid>
        )}
        {domains && (
          <S.DataGrid item xs={3}>
            Domain: {domains.map((item) => item)}
          </S.DataGrid>
        )}
        {numVulns > 0 && (
          <S.DataGrid item xs={3}>
            <ModalIpVulnsCvssComponent
              info={data}
              buttonName="RESUMEN CVSS +"
            />
          </S.DataGrid>
        )}
      </S.DataGridContainer>
    </S.Wrapper>
  );
};

export default IpBannerComponent;
