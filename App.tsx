import "react-native-gesture-handler";

import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import theme from "./src/theme";
import App from "./src/App";
import SectionProvider from "./src/context/SectionProvider";

const client = new QueryClient();

export default function Root() {
  return (
    <SafeAreaProvider>
      <SectionProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={client}>
            <App />
          </QueryClientProvider>
        </ThemeProvider>
      </SectionProvider>
    </SafeAreaProvider>
  );
}
