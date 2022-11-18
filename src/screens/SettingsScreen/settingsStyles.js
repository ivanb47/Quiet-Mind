import { StyleSheet, Platform, StatusBar } from "react-native";
import { useTheme } from "@rneui/themed";
import { globalStyles } from "../globalStyles";
const styles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    titleText: {
      paddingLeft: 20,
      paddingTop: 20,
      fontSize: globalStyles.fontSet.title1,
      color: theme.colors.primary,
    },
    logo: {
      width: 180,
      alignSelf: "center",
      height: 180,
      marginBottom: 10,
    },
    subTitleText: {
      fontSize: globalStyles.fontSet.title3,
      paddingLeft: 20,
      paddingTop: 10,
      color: theme.colors.grey0,
    },
    preferencesText: {
      flex: 1,
      fontSize: globalStyles.fontSet.headline,
      paddingLeft: 20,
      padding: 10,
      color: theme.colors.primary,
    },
    rowContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    swiches: {
      marginRight: 20,
    },
  });
};

export default styles;
