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
    },
    contentContainer: {
      paddingBottom: 20,
    },
    searchbarContainer: {
      backgroundColor: "transparent",
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
    },
    textInput: {
      color: theme.colors.black,
    },
    textInputContainer: {
      backgroundColor:
        Platform.OS == "ios"
          ? theme.colors.greyOutline
          : theme.colors.background,
      height: 40,
      borderRadius: 10,
      elevation: 1,
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
    cardwidth: {
      width: 400,
    },

    backgroundShadow:
      mode === "dark"
        ? {}
        : {
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
