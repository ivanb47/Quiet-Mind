import AppNavigation from "./src/navigation/AppNavigation";
import { ThemeProvider } from "@rneui/themed";
import Toast from "react-native-toast-message";
import { theme } from "./src/screens/globalStyles";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
      <Toast position="bottom" />
    </ThemeProvider>
  );
}
