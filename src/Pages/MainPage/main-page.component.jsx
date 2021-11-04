import React, { useState } from "react";
import DashboardComponent from "../../Layouts/Dashboard/dashboard.component";
import ShodanData from "../../Layouts/ShodanData/shodan-data.component";
import { ExtractData } from "../../components/rest-api/extract-data.component";

import * as S from "./main-page.styles";
import PriorityAtentionComponent from "../../Layouts/PriorityAtention/priority-atention.component";
import {
  averageOrganizationalRisk,
  groupRepeatVariables,
  sumData,
} from "../../util";
import { Grid } from "@material-ui/core";

const MainPageComponent = () => {
  const [ips] = useState([
    "192.188.58.61",
    "192.188.58.50",
    "192.188.58.45",
    "192.188.58.59",
    "192.188.58.63",
    "192.188.58.78",
    "192.188.58.76",
    "192.188.58.180",
    "192.188.58.75",
  ]);

  const info = ips.map((item) => ExtractData(item));
  const sum = info.map((item) => item.data.length);
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
  if (!info) return null;
  return (
    <S.Wrapper id="top">
      <S.Line />
      <section id="gi">
        <S.Title>Informacion General de la Organizacion</S.Title>
        <S.GridContainer container justifyContent="center" spacing={3}>
          <Grid item md={4}>
            <S.InfoContainer>
              <S.Variable>Organizacion</S.Variable>
              <S.Description>Escuela Politecnica del Ejercito</S.Description>
              <S.Line />
            </S.InfoContainer>
          </Grid>
          <Grid item md={4}>
            <S.InfoContainer>
              <S.Variable>Total de vulnerabilidades identificadas</S.Variable>
              <S.Description>{total}</S.Description>
              <S.Line />
            </S.InfoContainer>
          </Grid>
          <Grid item md={4}>
            <S.InfoContainer>
              <S.Variable>Total de IP escaneadas</S.Variable>
              <S.Description>{ips.length}</S.Description>
              <S.Line />
            </S.InfoContainer>
          </Grid>
          <Grid item md={4}>
            <S.InfoContainerRisk color={colorRisk}>
              <S.Variable
                color={colorRisk === "rgba(63, 62, 62)" ? "white" : "black"}
              >
                Riesgo Promedio de la Organizacion (AOR)
              </S.Variable>
              <S.Description>{AOR}</S.Description>
              <S.Line />
            </S.InfoContainerRisk>
          </Grid>
          <Grid item md={4}>
            <S.InfoContainer>
              <S.Variable>Tiempo Promedio de Remediacion (ART)</S.Variable>
              <S.Description>{average} dias</S.Description>
              <S.Line />
            </S.InfoContainer>
          </Grid>
        </S.GridContainer>
      </section>
      <section id="vi">
        <S.Line />
        <S.Title>Informacion General de Vulnerabilidades</S.Title>
        <DashboardComponent info={info} />
      </section>
      <section id="db">
        <S.Line />
        <S.Title>IP Banner y Vulnerabilidades Detalladas</S.Title>
        <ShodanData info={info} />
      </section>
      <section id="pt">
        <S.Line />
        <S.Title>Priorizacion de Vulnerabilidades</S.Title>
        <S.Line />
        <S.Title>Descripcion Variables de Entorno</S.Title>
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
              <strong>POE: </strong> Probability of Occurrence of an Event in
              the IP
            </S.DescriptionVariables>
          </Grid>
          <Grid item md={4}>
            <S.DescriptionVariables>
              <strong>PSA: </strong> Port Service Available
            </S.DescriptionVariables>
          </Grid>
          <Grid item md={4}>
            <S.DescriptionVariables>
              <strong>QT: </strong> Query Tags
            </S.DescriptionVariables>
          </Grid>
        </S.GridContainer>
        <S.Line />
        <S.Title>Tabla de Priorizacion</S.Title>
        <S.Line />
        <PriorityAtentionComponent info={info} />
      </section>
    </S.Wrapper>
  );
};

export default MainPageComponent;
