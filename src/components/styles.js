import { StyleSheet, Platform, Dimensions } from "react-native";
import { useTheme } from "@rneui/themed";
import { globalStyles } from "./../screens/globalStyles";
const styles = () => {
  const { theme } = useTheme();
  const windowWidth = Dimensions.get("window").width;
  return StyleSheet.create({
    quoteContainer: {
      marginVertical: 20,
      backgroundColor: theme.colors.cardColor,
      opacity: 0.9,
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
    suggestionCardRow: {
      opacity: 0.9,
      marginTop: 20,
      width: windowWidth - 40,
      backgroundColor: theme.colors.cardColor,
      borderRadius: 15,
      padding: 15,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    suggestionImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    itemCardRow: {
      opacity: 0.9,
      marginTop: 20,
      width: 280,
      backgroundColor: theme.colors.cardColor,
      borderRadius: 15,
      padding: 15,
      marginHorizontal: 20,
    },
    itemCardImage: {
      width: 250,
      height: 130,
      borderRadius: 8,
    },
    title: {
      fontSize: globalStyles.fontSet.title3,
      color: theme.colors.black,
      fontWeight: "bold",
    },
    description: {
      fontSize: globalStyles.fontSet.subhead,
      color: theme.colors.grey3,
    },
    textContainer: {
      height: "100%",
    },
    showAllContainer: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.colors.black,
    },
    arrow: {
      width: 80,
      height: 20,
      marginBottom: 10,
    },
    backgroundShadow: {
      //   shadowColor: theme.colors.grey0,
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
