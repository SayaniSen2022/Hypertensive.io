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
        right="0"
        margin="0.5rem"
        variant="ghost"
        size="sm"
      >
        {colorMode === "dark" ? (
          <SunIcon color="yellow.300" />
        ) : (
          <MoonIcon color="blue.700" />
        )}
      </Button>
    </>
  );
};
export default ToggleColor;
