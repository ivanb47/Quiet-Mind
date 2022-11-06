import { StyleSheet, Platform, StatusBar } from "react-native";
import { useTheme } from "@rneui/themed";
import { globalStyles } from "../globalStyles";
const styles = () => {
  const { theme } = useTheme();
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
    textInputContainer: {
      backgroundColor: theme.colors.background,
      height: 40,
      borderRadius: 10,
    },
    cardwidth: {
      width: 400,
    },

    backgroundShadow: {
      shadowColor: theme.colors.grey0,
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
