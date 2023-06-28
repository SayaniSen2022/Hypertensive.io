import { Button, useColorMode } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
const ToggleColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        onClick={() => toggleColorMode()}
        pos="absolute"
        top="1"
        right="10"
        margin="0.7rem"
        variant="ghost"
        size="sm"
      >
        {colorMode === "dark" ? (
          <Icon as={MdSunny} w={6} h={4} color="#FFFF00" />
        ) : (
          <Icon as={RiMoonFill} w={6} h={4} color="#E2DED0" />
        )}
      </Button>
    </>
  );
};
export default ToggleColor;
