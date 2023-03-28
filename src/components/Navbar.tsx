import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image width="60px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
