import React from "react";
import { Doughnut } from "react-chartjs-2";
import * as S from "./doughnut-vulnerabilities-cvss.styles";
import VulnerabilitiesNum from "./vulnerabilities-num";
import VulnerabilitiesSum from "./vulnerabilities-sum";

const DoughnutVulnerabilitiesCvssComponent = ({ info, singleIp }) => {
  // const data = info.map((item) => VulnerabilitiesNum(item.data));
  // const sum = VulnerabilitiesSum(data);
  let sum;
  let data;
  if (singleIp) {
    //FUNCIONA PARA IP INDIVIDUAL
    sum = VulnerabilitiesNum(info);
  } else {
    //FUNCIONA PARA MULTIPLES IP
    data = info.map((item) => VulnerabilitiesNum(item.data));
    sum = VulnerabilitiesSum(data);
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
          color: "white",
          display: false,
        },
        grid: {
          offset: false,
          color: "green",
        },
      },
      y: {
        ticks: {
          color: "white",
          display: false,
        },
        grid: {
          offset: false,
          color: "green",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "CVSS v3.0 Ratings",
        position: "top",
        font: {
          size: 20,
        },
        padding: 20,
        color: "white",
      },
      legend: {
        display: true,
        position: "left",
        labels: {
          color: "white",
          boxWidth: 20,
        },
      },
    },
  };

  return (
    <S.Wrapper>
      <Doughnut data={state} options={config} />
    </S.Wrapper>
  );
};

export default DoughnutVulnerabilitiesCvssComponent;
