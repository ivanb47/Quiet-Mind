import AppNavigation from "./src/navigation/AppNavigation";
import { LogBox } from "react-native";
import React, { useEffect } from "react";
import { ThemeProvider } from "@rneui/themed";
import Toast from "react-native-toast-message";
import { theme } from "./src/screens/globalStyles";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    console.disableYellowBox = true;
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
      <Toast position="bottom" />
    </ThemeProvider>
  );
}
