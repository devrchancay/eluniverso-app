import "react-native-gesture-handler";

import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";

import RootStack from "./RootNavigation";
import useAppReady from "./hooks/useAppReady";
import AppLoading from "./components/AppLoading";

const client = new QueryClient();

export default function App() {
  const isAppReady = useAppReady();

  if (!isAppReady) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
