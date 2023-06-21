import React from "react";
import { Select } from "@chakra-ui/react";

const FilterData = (props) => {
  const onFilterValueChange = (e) => {
    props.filterValueSelected(e.target.value);
  };

  return (
    <div>
      <Select
        onChange={onFilterValueChange}
        width="10%"
        variant="outline"
        borderColor="blue.800"
        color="grey"
        size="xs"
        ml="1"
        my="2"
      >
        <option value="7">1 week</option>
        <option value="30">1 month</option>
        <option value="-1" selected>
          All
        </option>
      </Select>
    </div>
  );
};
export default FilterData;
