import { StyleSheet, Platform, StatusBar } from "react-native";
import { useTheme, useThemeMode } from "@rneui/themed";
import { globalStyles } from "../globalStyles";
const styles = () => {
  const { theme } = useTheme();
  const { mode } = useThemeMode();
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    contentContainer: {
      paddingBottom: 20,
    },
    titleText: {
      paddingLeft: 20,
      fontSize: globalStyles.fontSet.title1,
      color: theme.colors.primary,
    },
    listContainer: {
      marginTop: 20,
      backgroundColor: theme.colors.cardColor,
      borderRadius: 15,
      padding: 10,
      marginHorizontal: 20,
    },
    textInputContainer: {
      backgroundColor: theme.colors.background,
      height: 40,
      borderRadius: 10,
    },
    searchbarContainer: {
      backgroundColor: "transparent",
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
    },
    textInput: {
      color: theme.colors.black,
    },

    backgroundShadow: {
      shadowColor: theme.colors.grey1,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
};

export default styles;
