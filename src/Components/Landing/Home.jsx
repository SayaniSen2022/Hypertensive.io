import "./Home.css";
import { useColorMode } from "@chakra-ui/react";
import theme from "../../Theme/theme";

const Home = () => {
  const { colorMode } = useColorMode();

  const primaryColor = theme.colors[colorMode].primary;
  const secondaryColor = theme.colors[colorMode].secondary;

  return (
    <>
      <div>
        <h1 style={{ color: primaryColor }} className="name">
          Hypertensive.io
        </h1>
        <div style={{ color: secondaryColor }} className="description">
          Open source privacy respecting solution to track your blood pressure.
        </div>
      </div>
    </>
  );
};
export default Home;
