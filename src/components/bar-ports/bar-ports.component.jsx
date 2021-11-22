import React from "react";
import { Bar } from "react-chartjs-2";
import * as S from "./bar-ports.styles";
import {
  countRepeatVariables,
  extractRepeatVariables,
  groupRepeatVariables,
} from "../../util";

const BarPorts = ({ info }) => {
  let ports;
  ports = info?.map((item) => item?.vuln?.ports?.map((item1) => item1));
  const labels = extractRepeatVariables(groupRepeatVariables(ports));
  const data = countRepeatVariables(labels, groupRepeatVariables(ports));
  const state = {
    labels: labels,
    datasets: [
      {
        label: "IPs",
        backgroundColor: "black",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        data: data,
      },
    ],
  };

  const config = {
    indexAxis: "x",
    scales: {
      x: {
        ticks: { color: "black" },
        grid: {
          offset: false,
          color: "black",
        },
      },
      y: {
        ticks: { color: "black" },
        grid: {
          offset: false,
          color: "black",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Puertos Abiertos",
        font: {
          size: 20,
        },
        padding: 20,
        color: "black",
      },
      legend: {
        display: false,
        position: "top",
        labels: {
          color: "black",
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

export default BarPorts;
