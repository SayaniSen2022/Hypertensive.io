import { useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import FilterData from "./FilterData";
import "./Statistics.css";

const Statistics = () => {
  const [data] = useState(JSON.parse(localStorage.getItem("readingData")));
  // console.log(data);

  const [selectedValue, setSelectedValue] = useState("-1");

  const filteredList = data.filter((item) => {
    let today = new Date();
    if (selectedValue === "-1") {
      return true;
    } else if (selectedValue === "7") {
      today.setDate(today.getDate() - 7);
      return (
        new Date(item.date).getTime() < new Date().getTime() &&
        new Date(item.date).getTime() > today.getTime()
      );
    } else {
      today.setDate(today.getDate() - 30);
      return (
        new Date(item.date).getTime() < new Date().getTime() &&
        new Date(item.date).getTime() > today.getTime()
      );
    }
  });
  // console.log(filteredList);

  const onFilterValueSelected = (dateRef) => {
    setSelectedValue(dateRef);
  };

  return (
    <>
      <FilterData filterValueSelected={onFilterValueSelected} />

      <div className="chart-display">
        <LineChart chartData={filteredList} />

        <PieChart chartData={filteredList} />
      </div>
    </>
  );
};
export default Statistics;
