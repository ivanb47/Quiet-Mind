import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { useTheme, useThemeMode } from "@rneui/themed";
import { globalStyles } from "../globalStyles";

const styles = () => {
  const { theme } = useTheme();
  const { mode } = useThemeMode();
  const windowWidth = Dimensions.get("window").width;
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    contentContainer: {
      paddingBottom: 20,
    },
    titleText: {
      paddingLeft: 20,
      fontSize: globalStyles.fontSet.title1,
      color: theme.colors.primary,
      justifyContent: "space-between",
    },
    adviceIndexContainer: {
      alignSelf: "center",
      justifyContent: "center",
      alignContent: "center",
      width: windowWidth,
    },
    shareIcon: {
      marginRight: 20,
      fontSize: globalStyles.fontSet.title1,
      color: theme.colors.primary,
    },
    quoteContainer: {
      marginTop: 20,
      backgroundColor: theme.colors.cardColor,
      borderRadius: 15,
      padding: 10,
      marginHorizontal: 20,
    },
    quoteTextContainer: {
      paddingTop: 10,
      flexDirection: "row",
      width: "100%",
    },
    suggestionCardRow: {
      opacity: 0.9,
      marginTop: 20,
      marginBottom: 20,
      width: windowWidth - 40,
      backgroundColor: theme.colors.grey3,
      borderRadius: 15,
      padding: 15,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      width: 175,
      alignSelf: "center",
      height: 38,
      marginBottom: 10,
    },
    suggestionImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    description: {
      fontSize: globalStyles.fontSet.subhead,
      color: theme.colors.grey3,
      paddingTop: 5,
    },
    title: {
      fontSize: globalStyles.fontSet.title3,
      color: theme.colors.black,
      fontWeight: "bold",
    },
    quoteImage: {
      width: 16,
      height: 15,
    },
    textContainer: {
      flex: 1,
    },
    quoteText: {
      fontSize: globalStyles.fontSet.title3,
      color: theme.colors.black,
      textAlign: "center",
      paddingHorizontal: 10,
      width: "90%",
    },
    quoteByText: {
      fontSize: globalStyles.fontSet.subhead,
      textAlign: "right",
      paddingTop: 10,
      fontStyle: "italic",
      color: theme.colors.grey0,
      paddingHorizontal: 10,
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
