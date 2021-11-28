import React from "react";
import { Doughnut } from "react-chartjs-2";
import * as S from "./doughnut-vulnerabilities-cvss.styles";
import { numberVulnerabilitiesCVSS, sumVulnerabilitiesCVSS } from "../../util";

const DoughnutVulnerabilitiesCvssComponent = ({ info, singleIp }) => {
  let sum;
  let data;
  if (singleIp) {
    //FUNCIONA PARA IP INDIVIDUAL
    sum = numberVulnerabilitiesCVSS(info);
  } else {
    //FUNCIONA PARA MULTIPLES IP
    data = info.map((item) => numberVulnerabilitiesCVSS(item.data));
    sum = sumVulnerabilitiesCVSS(data);
  }

  const color = [
    "rgba(255, 255, 255)",
    "rgba(116, 238, 63)",
    "rgba(234, 231, 46)",
    "rgba(237, 45, 19)",
    "rgba(63, 62, 62)",
  ];
  const state = {
    labels: ["None", "Low", "Medium", "High", "Critical"],
    datasets: [
      {
        label: "CVSS Score",
        backgroundColor: color,
        borderColor: "black",
        borderWidth: 2,
        data: sum,
      },
    ],
  };
  const config = {
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          color: "black",
          display: false,
        },
        grid: {
          offset: false,
          color: "black",
        },
      },
      y: {
        ticks: {
          color: "black",
          display: false,
        },
        grid: {
          offset: false,
          color: "black",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Common Vulnerability Scoring System",
        position: "top",
        font: {
          size: 20,
        },
        padding: 20,
        color: "black",
      },
      legend: {
        display: true,
        position: "left",
        labels: {
          color: "black",
          boxWidth: 20,
        },
      },
    },
  };

  return (
    <S.Wrapper>
      <Doughnut data={state} options={config} type="" />
    </S.Wrapper>
  );
};

export default DoughnutVulnerabilitiesCvssComponent;
