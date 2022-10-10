import { StatusBar } from "expo-status-bar";
import AppNavigation from "./src/navigation/AppNavigation";
import { ThemeProvider } from "@rneui/themed";

import { theme } from "./src/screens/globalStyles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="default" />
      <AppNavigation />
    </ThemeProvider>
  );
}
