import { StyleSheet, Platform, StatusBar } from "react-native";
import { useTheme } from "@rneui/themed";
const styles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      alignItems: "center",
      justifyContent: "center",
    },
    contentContainer: {
      paddingBottom: 20,
    },
    sign_up: {
      marginTop: 10,
      marginStart: 5,
      fontWeight: "bold",
      color: "#0000FF",
    },
    account: {
      marginTop: 10,
    },
    quoteImage: {
      width: 100,
      height: 100,
      margin: 30,
    },
    logoStyle: {
      width: 200,
      height: 200,
    },
    inputView: {
      backgroundColor: theme.colors.grey5,
      borderRadius: 10,
      width: "80%",
      height: 45,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: theme.colors.black,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 10,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: theme.colors.black,
    },
    loginText: {
      color: theme.colors.white,
    },
    text: {
      color: theme.colors.black,
    },
  });
};

export default styles;
