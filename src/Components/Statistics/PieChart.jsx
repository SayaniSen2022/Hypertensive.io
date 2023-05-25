import React, { useState } from "react";
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
    reading.Systolic >= 140 &&
    reading.Systolic <= 159 &&
    reading.Diastolic < 90
  ) {
    return "Grade 1 Isolated Systolic Hypertension";
  }
};

const PieChart = () => {
  const [readingData] = useState(
    JSON.parse(localStorage.getItem("readingData"))
  );
  // console.log(readingData.length);
  // console.log(
  //   "Optimal :",
  //   readingData.filter((element) => element.Category === "Optimal").length
  // );
  // console.log(
  //   "Normal :",
  //   readingData.filter((element) => element.Category === "Normal").length
  // );
  // console.log(
  //   "G :",
  //   readingData.filter(
  //     (element) => element.Category === "Grade 1 Isolated Systolic Hypertension"
  //   ).length
  // );

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
    labels: ["Normal", "Optimal", "Grade 1 Isolated Systolic Hypertension"],
    datasets: [
      {
        data: [
          catMap.get("Normal"),
          catMap.get("Optimal"),
          catMap.get("Grade 1 Isolated Systolic Hypertension"),
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div style={{ padding: "20px", width: "50%" }}>
      <Pie data={data}></Pie>
    </div>
  );
};
export default PieChart;
