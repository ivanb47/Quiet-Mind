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
    contentContainer: {
      paddingBottom: 20,
    },
    titleText: {
      paddingTop: 20,
      paddingLeft: 20,
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
    quoteImage: {
      width: 16,
      height: 15,
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
    backgroundShadow: {
      //   shadowColor: theme.colors.grey0,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 7,
    },
  });
};

export default styles;
