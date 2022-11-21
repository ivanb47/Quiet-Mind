import { StatusBar } from "expo-status-bar";
import AppNavigation from "./src/navigation/AppNavigation";
import { ThemeProvider } from "@rneui/themed";
import MusicList from "./src/screens/MusicListScreen/MusicList";
import ExerciseList from "./src/screens/ExerciseListScreen/ExerciseList";
import LoginScreen from "./src/screens/LoginScreen/Login";
import SignUpScreen from "./src/screens/SignUpScreen/SignUp";
import Toast from "react-native-toast-message";
import { theme } from "./src/screens/globalStyles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="default" />
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
      <AppNavigation />
      <Toast position="bottom" />
    </ThemeProvider>
  );
}
