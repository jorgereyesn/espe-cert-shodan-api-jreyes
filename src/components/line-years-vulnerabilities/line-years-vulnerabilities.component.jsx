import React from "react";
import { Line } from "react-chartjs-2";
import * as S from "./line-vulnerabilities.styles";
import YearsCountComponent from "./years-count.component";

const LineYearsVulnerabilitiesComponent = ({ info }) => {
  //EXTRAER AÑOS
  const years = info.map((item) =>
    item.data.map((item1) => item1.cve.substr(4, 4))
  );
  const test = YearsCountComponent(years);

  const state = {
    labels: test.repeatYears,
    datasets: [
      {
        label: "Vulnerabilities",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "white",
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
        text: "Años de referencia en CVE",
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
      <Line data={state} options={config} />
    </S.Wrapper>
  );
};

export default LineYearsVulnerabilitiesComponent;
