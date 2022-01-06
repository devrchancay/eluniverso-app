import { Image } from "react-native";
import Hamburger from "../icons/Hamburger";
import Search from "../icons/Search";

import Box from "./Box";
import Typography from "./Typography";

const logo = require("../../assets/images/logo.png");

function Header() {
  return (
    <Box
      py={6}
      flexDirection="row"
      justifyContent="space-between"
      px={6}
      alignContent="center"
      alignItems="center"
    >
      <Box>
        <Hamburger />
      </Box>
      <Box>
        <Image
          source={logo}
          resizeMode="contain"
          style={{ width: 151, height: 37 }}
        />
      </Box>
      <Box pb={2}>
        <Search />
      </Box>
    </Box>
  );
}

export default Header;
