import React, { useState } from "react";
import DashboardComponent from "../../Layouts/Dashboard/dashboard.component";
import ShodanData from "../../Layouts/ShodanData/shodan-data.component";
import { ExtractData } from "../../components/rest-api/extract-data.component";

import * as S from "./main-page.styles";
import ExtractComponent from "../../components/rest-api/extract.component";

const MainPageComponent = () => {
  const [ips] = useState([
    "192.188.58.99",
    "192.188.58.61",
    "192.188.58.50",
    "192.188.58.45",
    "192.188.58.32",
    "190.15.135.10",
    "192.188.58.40",
    "192.188.58.47",
    "192.188.58.59",
    "192.188.58.63",
  ]);

  const info = ips.map((item) => ExtractData(item));
  // let a = "192.188.58.50";
  // const info = ExtractData(ips[2]);
  // console.log(ips[2]);
  // const info1 = ExtractComponent();
  // console.log(info1);

  return (
    <S.Wrapper>
      <DashboardComponent info={info} />
      <ShodanData info={info} />
    </S.Wrapper>
  );
};

export default MainPageComponent;
