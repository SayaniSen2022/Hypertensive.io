import React, { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Statistics = () => {
  const [readingData, setReadingData] = useState(
    JSON.parse(localStorage.getItem("readingData"))
  );
  console.log(readingData);

  const labels = readingData.map((data) => data.date);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Systolic Pressure",
        backgroundColor: "red",
        borderColor: "black",
        pointerBorderColor: "aqua",
        data: readingData.map((data) => data.systolic),
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 200,
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
};
export default Statistics;
