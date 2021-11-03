import React from "react";
import { Bar } from "react-chartjs-2";
import * as S from "./bar-ports.styles";
import YearsCountComponent from "../line-years-vulnerabilities/years-count.component";

const BarPorts = ({ info }) => {
  let ports;
  ports = info?.map((item) => item?.vuln?.ports?.map((item1) => item1));
  const test = YearsCountComponent(ports);
  const state = {
    labels: test.repeatYears,
    datasets: [
      {
        label: "IPs",
        backgroundColor: "black",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        data: test.finalCount,
      },
    ],
  };

  const config = {
    indexAxis: "x",
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
        text: "Puertos",
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

export default BarPorts;
