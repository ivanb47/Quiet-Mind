import { StyleSheet, Platform, Dimensions } from "react-native";
import { useTheme, useThemeMode } from "@rneui/themed";
import { globalStyles } from "../globalStyles";
const styles = () => {
  const { theme } = useTheme();
  const { mode } = useThemeMode();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      height: windowHeight,
    },
    contentContainer: {
      paddingBottom: 20,
    },
    titleText: {
      paddingLeft: 20,
      fontSize: globalStyles.fontSet.title1,
      color: theme.colors.primary,
    },
    musicHeader: {
      padding: 20,
      textAlign: "center",
      fontSize: globalStyles.fontSet.title1,
      color: theme.colors.primary,
      fontWeight: "300",
    },
    listContainer: {
      marginTop: 20,
      backgroundColor: theme.colors.cardColor,
      borderRadius: 15,
      padding: 10,
      marginHorizontal: 20,
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
    cardHeight: {
      width: 60,
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
