import React from "react";

import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { Select } from "@chakra-ui/react";
import "./Statistics.css";

const Statistics = () => {
  return (
    <>
      <div>
        <Select
          width="10%"
          variant="outline"
          borderColor="blue.800"
          color="grey"
          size="xs"
          ml="1"
          my="2"
        >
          <option value="option1">Last 30 days</option>
          <option value="option2">All</option>
        </Select>
      </div>
      <div className="chart-display">
        <LineChart />
        <PieChart />
      </div>
    </>
  );
};
export default Statistics;
