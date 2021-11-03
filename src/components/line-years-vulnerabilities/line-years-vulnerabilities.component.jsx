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
  console.log(test);
  const state = {
    labels: test.repeatYears,
    datasets: [
      {
        label: "Vulnerabilities",
        backgroundColor: test?.finalCount?.map((item) =>
          item > 100 ? "red" : item > 50 ? "yellow" : "rgba(116, 238, 63)"
        ),
        borderColor: "black",
        borderWidth: 2,
        data: test.finalCount,
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
        text: "Años de referencia en CVE",
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
      <Line data={state} options={config} />
    </S.Wrapper>
  );
};

export default LineYearsVulnerabilitiesComponent;
