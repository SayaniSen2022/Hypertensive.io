import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import "./ResBox.css";

const ResBox = (props) => {
  return (
    <VStack>
      <div className="label-tag">{props.label}</div>
      <Box className="custom-box" border="ridge" w={props.width}>
        {props.children}
      </Box>
    </VStack>
  );
};
export default ResBox;
