import React from "react";
import { Bar } from "react-chartjs-2";
import * as S from "./bar-vulnerabilities-ip.styles";

const BarVulnerabilitiesIpComponent = ({ info }) => {
  const state = {
    labels: info.map((item) => item.vuln.ip_str),
    datasets: [
      {
        label: "Vulnerabilities",
        backgroundColor: "black",
        borderColor: info.map((item) =>
          item.data.length > 100
            ? "red"
            : item.data.length > 50
            ? "yellow"
            : "rgba(116, 238, 63)"
        ),
        borderWidth: 2,
        data: info.map((item) => item.data.length),
      },
    ],
  };

  const config = {
    indexAxis: "y",
    scales: {
      x: {
        ticks: { color: "white" },
        grid: {
          offset: false,
          color: "green",
        },
      },
      y: {
        ticks: { color: "white" },
        grid: {
          offset: false,
          color: "green",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Cantidad de vulnerabilidades por IP",
        font: {
          size: 20,
        },
        padding: 20,
        color: "white",
      },
      legend: {
        display: false,
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
      <Bar data={state} options={config} />
    </S.Wrapper>
  );
};

export default BarVulnerabilitiesIpComponent;
