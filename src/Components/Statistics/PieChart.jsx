import React, { useState } from "react";
import "./PieChart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const getReadingCategory = (reading) => {
  if (reading.Systolic < 120 && reading.Diastolic < 80) {
    return "Optimal";
  } else if (
    reading.Systolic < 130 &&
    reading.Systolic >= 120 &&
    reading.Diastolic < 85 &&
    reading.Diastolic >= 80
  ) {
    return "Normal";
  } else if (
    reading.Systolic >= 130 &&
    reading.Systolic < 140 &&
    reading.Diastolic < 90 &&
    reading.Diastolic >= 85
  ) {
    return "High Normal";
  } else if (
    reading.Systolic >= 140 &&
    reading.Systolic < 160 &&
    reading.Diastolic >= 90 &&
    reading.Diastolic < 100
  ) {
    return "HYPERTENSION STAGE 1";
  } else if (
    reading.Systolic >= 160 &&
    reading.Systolic < 180 &&
    reading.Diastolic >= 100 &&
    reading.Diastolic < 110
  ) {
    return "HYPERTENSION STAGE 2";
  } else if (reading.Systolic >= 180 && reading.Diastolic >= 110) {
    return "HYPERTENSION STAGE 3";
  } else if (
    reading.Systolic >= 140 &&
    reading.Systolic < 160 &&
    reading.Diastolic < 90
  ) {
    return "Isolated Systolic Hypertension Grade 1";
  } else if (
    reading.Systolic >= 160 &&
    reading.Systolic < 160 &&
    reading.Diastolic < 90
  ) {
    return "Isolated Systolic Hypertension Grade 2";
  }
};

const PieChart = () => {
  const [readingData] = useState(
    JSON.parse(localStorage.getItem("readingData"))
  );

  let catMap = new Map();

  for (let reading of readingData) {
    let readingCategory = getReadingCategory(reading);
    if (catMap.has(readingCategory)) {
      catMap.set(readingCategory, catMap.get(readingCategory) + 1);
    } else {
      catMap.set(readingCategory, 1);
    }
  }

  const data = {
    labels: [
      "Optimal",
      "Normal",
      "High Normal",
      "HYPERTENSION STAGE 1",
      "HYPERTENSION STAGE 2",
      "HYPERTENSION STAGE 3",
      "Isolated Systolic Hypertension Grade 1",
      "Isolated Systolic Hypertension Grade 2",
    ],
    datasets: [
      {
        data: [
          catMap.get("Optimal"),
          catMap.get("Normal"),
          catMap.get("High Normal"),
          catMap.get("HYPERTENSION STAGE 1"),
          catMap.get("HYPERTENSION STAGE 2"),
          catMap.get("HYPERTENSION STAGE 3"),
          catMap.get("Isolated Systolic Hypertension Grade 1"),
          catMap.get("Isolated Systolic Hypertension Grade 2"),
        ],
        backgroundColor: [
          "#2C5E1A",
          "#9ACD32",
          "yellow",
          "orange",
          "#750000",
          "#A30000",
          "#FF2E2E",
          "#D10000",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "start",
      },
      tooltip: true,
    },
    layout: {
      autoPadding: true,
    },
  };

  return (
    <div className="pie">
      <Pie data={data} options={options}></Pie>
    </div>
  );
};
export default PieChart;
