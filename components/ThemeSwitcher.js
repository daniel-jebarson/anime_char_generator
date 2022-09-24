import { useColorMode, Button, IconButton } from "@chakra-ui/react";
import { SunIcon, StarIcon, MoonIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    // <Button
    //   onClick={toggleColorMode}
    //   position="fixed"
    //   top="1rem"
    //   right="1rem"
    //   color="green"
    // >
    <div>
      {" "}
      {colorMode == "dark" ? (
        <IconButton
          onClick={toggleColorMode}
          position="fixed"
          top="1rem"
          right="1rem"
          color="black"
          colorScheme="black"
          bg="white"
          aria-label="Get request"
          h={8}
          w={5}
          icon={<SunIcon />}
        />
      ) : (
        <IconButton
          onClick={toggleColorMode}
          position="fixed"
          top="1rem"
          right="1rem"
          color="white"
          colorScheme="white"
          bg="black"
          h={8}
          w={5}
          aria-label="Get request"
          icon={<MoonIcon />}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
