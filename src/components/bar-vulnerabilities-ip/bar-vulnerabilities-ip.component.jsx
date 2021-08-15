import React from "react";
import { Bar } from "react-chartjs-2";

const BarVulnerabilitiesIpComponent = ({ info }) => {
  const state = {
    labels: info.map((item) => item.vuln.ip_str),
    datasets: [
      {
        label: "Vulnerabilidades",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "white",
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
          offset: true,
          color: "green",
        },
      },
      y: {
        ticks: { color: "white" },
        grid: {
          offset: true,
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

  return <Bar data={state} options={config} />;
};

export default BarVulnerabilitiesIpComponent;
