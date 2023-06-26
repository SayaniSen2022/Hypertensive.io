import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const ToggleColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        onClick={() => toggleColorMode()}
        pos="absolute"
        top="0"
        right="10"
        margin="0.7rem"
        variant="ghost"
        size="sm"
      >
        {colorMode === "dark" ? (
          <SunIcon w={6} h={5} color="yellow.300" />
        ) : (
          <MoonIcon w={6} h={5} color="blue.700" />
        )}
      </Button>
    </>
  );
};
export default ToggleColor;
