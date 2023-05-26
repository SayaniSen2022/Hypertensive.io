import React, { useState } from "react";
import "./LineChart.css";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js/auto";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const [readingData] = useState(
    JSON.parse(localStorage.getItem("readingData"))
  );

  const labels = readingData.map((data) => data.Date);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Systolic Pressure",
        borderColor: "red",
        pointStyle: false,
        data: readingData.map((data) => data.Systolic),
      },
      {
        label: "Diastolic Pressure",
        borderColor: "blue",
        pointStyle: false,
        data: readingData.map((data) => data.Diastolic),
      },
      {
        label: "Pulse",
        borderColor: "magenta",
        pointStyle: false,
        data: readingData.map((data) => data.Pulse),
      },
    ],
    tension: 0.025,
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "centre",
      },
    },
    layout: {
      autoPadding: true,
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 200,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="line-chart">
      <Line data={data} options={options}></Line>
    </div>
  );
};
export default LineChart;
