import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Box from "./Box";

function Layout({ children }: { children: React.ReactNode }) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <Box variant="full" pt={top} pb={bottom}>
      {children}
    </Box>
  );
}

export default Layout;
