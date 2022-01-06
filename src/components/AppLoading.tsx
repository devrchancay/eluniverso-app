import { ActivityIndicator, Image, useWindowDimensions } from "react-native";
import Box from "./Box";

const image = require("../../assets/images/logo.png");

function AppLoading() {
  const { width } = useWindowDimensions();

  const imageWidth = width - 100;

  return (
    <Box
      variant="full"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <Image
        source={image}
        resizeMode="contain"
        style={{ width: imageWidth, height: 150 }}
      />
      <ActivityIndicator />
    </Box>
  );
}

export default AppLoading;
