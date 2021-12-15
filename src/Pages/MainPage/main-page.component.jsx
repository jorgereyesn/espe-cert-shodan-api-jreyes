import React, { useEffect, useState } from "react";
import DashboardComponent from "../../Layouts/Dashboard/dashboard.component";
import ShodanData from "../../Layouts/ShodanData/shodan-data.component";
import { ExtractData } from "../../components/rest-api/extract-data.component";
import HashLoader from "react-spinners/HashLoader";

import * as S from "./main-page.styles";
import PriorityAtentionComponent from "../../Layouts/PriorityAtention/priority-atention.component";
import {
  averageOrganizationalRisk,
  extractDataShow,
  groupRepeatVariables,
  sumData,
} from "../../util";
import { Grid } from "@material-ui/core";

const MainPageComponent = () => {
  //INFO ESPE
  const [ips] = useState([
    "192.188.58.61",
    "192.188.58.50",
    "192.188.58.45",
    // "190.15.135.10", //No tiene vulnerabilidades
    // "192.188.58.32", //No tiene vulnerabilidades
    // "192.188.58.40", //No tiene vulnerabilidades
    // "192.188.58.47", //No tiene vulnerabilidades
    // "192.188.58.70", //No tiene vulnerabilidades
    // "192.188.58.99", //No tiene vulnerabilidades
    "192.188.58.59",
    "192.188.58.63",
    "192.188.58.78",
    // "192.188.58.76", //No tiene vulnerabilidades
    "192.188.58.180",
    "192.188.58.75",
  ]);
  const orgName = "Escuela Politecnica del Ejercito";

  // INFO UTE
  // const [ips] = useState(["192.188.51.24", "192.188.51.6"]);
  // const orgName = "Universidad Tecnologica Equinoccial";

  //INFO EPN
  // const [ips] = useState([
  //   "190.96.108.131",
  //   "201.218.11.43",
  //   "190.96.111.110",
  //   "190.96.108.133",
  //   "190.96.108.132",
  //   "190.96.111.111",
  //   "190.96.111.112",
  // ]);
  // const orgName = "Escuela Politecnica Nacional";

  const info = extractDataShow(ips.map((item) => ExtractData(item)));
  const sum = info?.map((item) => item?.data?.length);
  const total = sumData(sum);
  const allCVSS = groupRepeatVariables(
    info?.map((item) => item?.data?.map((data) => data.cvss * 1))
  );
  const AOR = averageOrganizationalRisk(sumData(allCVSS), total);
  let years = groupRepeatVariables(
    info.map((item) => item?.data?.map((item1) => item1?.cve?.substr(4, 4) * 1))
  );
  const today = new Date();
  const currentYear = today.getFullYear();
  years = years?.map((item) => (currentYear - item) * 365);
  const average = (sumData(years) / total).toFixed(2) * 1;
  const colorRisk =
    AOR > 0 && AOR <= 3.9
      ? "rgba(116, 238, 63)"
      : AOR > 3.9 && AOR <= 6.9
      ? "rgba(234, 231, 46)"
      : AOR > 6.9 && AOR <= 8.9
      ? "rgba(237, 45, 19)"
      : "rgba(63, 62, 62)";

  //LOADING
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <>
      {loading ? (
        <S.Loading>
          <HashLoader size={100} color={"#7ED321"} loading={loading} />
          <S.Message>Loading.....</S.Message>
        </S.Loading>
      ) : (
        <S.Wrapper id="top">
          <S.Line />
          <section id="gi">
            <S.Title>General Organization Information</S.Title>
            <S.GridContainer container justifyContent="center" spacing={3}>
              <Grid item md={4}>
                <S.InfoContainer>
                  <S.Variable>Organization</S.Variable>
                  <S.Description>{orgName}</S.Description>
                  <S.Line />
                </S.InfoContainer>
              </Grid>
              <Grid item md={4}>
                <S.InfoContainer>
                  <S.Variable>Total vulnerabilities identified</S.Variable>
                  <S.Description>{total}</S.Description>
                  <S.Line />
                </S.InfoContainer>
              </Grid>
              <Grid item md={4}>
                <S.InfoContainer>
                  <S.Variable>Total IP scanned</S.Variable>
                  <S.Description>{ips?.length}</S.Description>
                  <S.Line />
                </S.InfoContainer>
              </Grid>
              <Grid item md={4}>
                <S.InfoContainer>
                  <S.Variable>Total IP with Vulnerabilities</S.Variable>
                  <S.Description>{info?.length}</S.Description>
                  <S.Line />
                </S.InfoContainer>
              </Grid>
              <Grid item md={4}>
                <S.InfoContainerRisk color={colorRisk}>
                  <S.Variable
                    color={colorRisk === "rgba(63, 62, 62)" ? "white" : "black"}
                  >
                    Average Organizational Risk (AOR)
                  </S.Variable>
                  <S.Description>{AOR}</S.Description>
                  <S.Line />
                </S.InfoContainerRisk>
              </Grid>
              <Grid item md={4}>
                <S.InfoContainer>
                  <S.Variable>Average Vulnerability Time (AVT)</S.Variable>
                  <S.Description>{average} days</S.Description>
                  <S.Line />
                </S.InfoContainer>
              </Grid>
            </S.GridContainer>
          </section>
          <section id="vi">
            <S.Line />
            <S.Title>General Vulnerability Information</S.Title>
            <DashboardComponent info={info} />
          </section>
          <section id="db">
            <S.Line />
            <S.Title>IP Banner and Detailed Vulnerabilities</S.Title>
            <ShodanData info={info} />
          </section>
          <section id="pt">
            <S.Line />
            <S.Title>Vulnerability Prioritization</S.Title>
            <S.Line />
            <S.Title>Description of Environmental Variables</S.Title>
            <S.GridContainer container justifyContent="center" spacing={3}>
              <Grid item md={4}>
                <S.DescriptionVariables>
                  <strong>CVE: </strong> Common Vulnerabilities and Exposures
                </S.DescriptionVariables>
              </Grid>
              <Grid item md={4}>
                <S.DescriptionVariables>
                  <strong>CVSS: </strong> Common Vulnerability Scoring System
                </S.DescriptionVariables>
              </Grid>
              <Grid item md={4}>
                <S.DescriptionVariables>
                  <strong>TR: </strong> Total References
                </S.DescriptionVariables>
              </Grid>
              <Grid item md={4}>
                <S.DescriptionVariables>
                  <strong>EP: </strong> Exploitation Probability
                </S.DescriptionVariables>
              </Grid>
              <Grid item md={4}>
                <S.DescriptionVariables>
                  <strong>POE: </strong> Probability of Occurrence of an Event
                  in the IP
                </S.DescriptionVariables>
              </Grid>
              <Grid item md={4}>
                <S.DescriptionVariables>
                  <strong>POP: </strong> Probability of Open Ports
                </S.DescriptionVariables>
              </Grid>
              <Grid item md={4}>
                <S.DescriptionVariables>
                  <strong>PQT: </strong> Probability for Query Tags
                </S.DescriptionVariables>
              </Grid>
            </S.GridContainer>
            <S.Line />
            <S.Title>Prioritization Table</S.Title>
            <S.Line />
            <PriorityAtentionComponent info={info} />
          </section>
        </S.Wrapper>
      )}
    </>
  );
};

export default MainPageComponent;
