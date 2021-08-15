import React from "react";
import { Doughnut } from "react-chartjs-2";
import * as S from "./doughnut-vulnerabilities-cvss.styles";
import VulnerabilitiesNum from "./vulnerabilities-num";

const DoughnutVulnerabilitiesCvssComponent = ({ info }) => {
  // const data = VulnerabilitiesNum(info.data);

  const color = [
    "rgba(255, 255, 255)",
    "rgba(116, 238, 63)",
    "rgba(234, 231, 46)",
    "rgba(237, 45, 19)",
    "rgba(63, 62, 62)",
  ];
  const state = {
    labels: ["None", "Low", "Medium", "High", "Critical"],
    // info.map((item) => item.vuln.vulns)
    datasets: [
      {
        label: "CVSS Score",
        backgroundColor: color,
        borderColor: "black",
        borderWidth: 2,
        data: ["50", "100", "20", "30", "2"],
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
        text: "CVSS Score",
        font: {
          size: 20,
        },
        padding: 20,
        color: "white",
      },
      legend: {
        display: true,
        position: "top",
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
