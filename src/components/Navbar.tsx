import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image width="60px" src={logo} />
    </HStack>
  );
};

export default Navbar;
