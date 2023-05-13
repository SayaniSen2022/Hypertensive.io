import { Spinner } from "@chakra-ui/react";
import "./Loading.css";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner />
      <span style={{ paddingLeft: 10 }}>Loading...</span>
    </div>
  );
};
export default Loading;
