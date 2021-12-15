import React from "react";
import { Line } from "react-chartjs-2";
import * as S from "./line-vulnerabilities.styles";
import {
  countRepeatVariables,
  extractRepeatVariables,
  groupRepeatVariables,
} from "../../util";

const LineYearsVulnerabilitiesComponent = ({ info }) => {
  const years = info.map((item) =>
    item.data.map((item1) => item1.cve.substr(4, 4))
  );
  const labels = extractRepeatVariables(groupRepeatVariables(years)).sort();
  const data = countRepeatVariables(labels, groupRepeatVariables(years));
  const state = {
    labels: labels,
    datasets: [
      {
        label: "Vulnerabilities",
        backgroundColor: data.map((item) =>
          item > 100 ? "red" : item > 50 ? "yellow" : "rgba(116, 238, 63)"
        ),
        borderColor: "black",
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
        text: "Reference years in CVE-ID",
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
      <Line data={state} options={config} type="" />
    </S.Wrapper>
  );
};

export default LineYearsVulnerabilitiesComponent;
