import React, { useState } from "react";
import DashboardComponent from "../../Layouts/Dashboard/dashboard.component";
import ShodanData from "../../Layouts/ShodanData/shodan-data.component";
import { ExtractData } from "../../components/rest-api/extract-data.component";

import * as S from "./main-page.styles";
import PriorityAtentionComponent from "../../Layouts/PriorityAtention/priority-atention.component";
import { sumData } from "../../util";

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

  if (!info) return null;
  return (
    <S.Wrapper>
      <S.Header />
      <S.Description>
        Total de vulnerabilidades identificadas: {total}
      </S.Description>
      <S.Line />
      <S.Description>Total de IP escaneadas: {ips.length}</S.Description>
      <S.Line />
      <S.Title>DASHBOARD</S.Title>
      <DashboardComponent info={info} />
      <S.Line />
      <S.Title>SHODAN DATA</S.Title>
      <ShodanData info={info} />
      <S.Line />
      <S.Title>SUGERENCIA DE PRIORIDAD DE ATENCIÓN</S.Title>
      <PriorityAtentionComponent info={info} />
    </S.Wrapper>
  );
};

export default MainPageComponent;
