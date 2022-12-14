import { StyleSheet, Platform, Dimensions } from "react-native";
import { useTheme, useThemeMode } from "@rneui/themed";
import { globalStyles } from "../screens/globalStyles";
const styles = () => {
  const { theme } = useTheme();
  const { mode } = useThemeMode();
  const windowWidth = Dimensions.get("window").width;
  return StyleSheet.create({
    suggestionModal: {
      backgroundColor: theme.colors.cardColor,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    modalBG: {
      margin: 0,
      backgroundColor: theme.colors.modalBG,
      padding: 20,
    },
    quoteContainer: {
      marginVertical: 20,
      backgroundColor: theme.colors.cardColor,
      opacity: 0.9,
      borderRadius: 15,
      padding: 10,
      marginHorizontal: 20,
    },
    closeButton: {
      height: 37,
      width: 37,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 10,
      top: 10,
      borderRadius: 50,
      backgroundColor: theme.colors.white,
    },
    modal: {
      flex: 1,
      backgroundColor: theme.colors.white,
      borderRadius: 15,
      alignSelf: "center",
      justifyContent: "center",
      width: "90%",
      marginVertical: 120,
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
      minHeight: 90,
      backgroundColor: theme.colors.cardColor,
      borderRadius: 15,
      paddingHorizontal: 15,
      paddingVertical: 10,
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
    icon: {
      marginRight: 10,
    },
    itemCardRow: {
      opacity: 0.9,
      marginTop: 20,
      backgroundColor: theme.colors.cardColor,
      borderRadius: 15,
      padding: 15,
      marginHorizontal: 20,
    },
    songCardImage: {
      minWidth: 250,
      height: 130,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    songPlayPauseIcon: {
      backgroundColor: "#00000055",
      width: "100%",
      height: 130,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    itemCardImage: {
      width: 180,
      height: 180,
      borderRadius: 8,
      resizeMode: "contain",
      backgroundColor: theme.colors.grey3,
    },
    title: {
      fontSize: globalStyles.fontSet.title3,
      color: theme.colors.black,
      fontWeight: "bold",
    },
    description: {
      fontSize: globalStyles.fontSet.subhead,
      color: theme.colors.grey0,
      paddingTop: 5,
    },
    textContainer: {
      flex: 1,
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
      tintColor: theme.colors.black,
    },
    backgroundContainer: {
      backgroundColor: theme.colors.modalBG,
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
    tinyLogo: {
      width: 120,
      height: 120,
      alignSelf: "center",
      alignItems: "center",
      backgroundColor: theme.colors.divider,
      textAlign: "center",
      justifyContent: "center",
      borderRadius: 60,
    },
    header: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30,
      paddingHorizontal: 20,
      color: theme.colors.black,
      marginTop: 90,
      height: "20%",
    },
    suggestionHeader: {
      fontSize: globalStyles.fontSet.title2,
      fontWeight: "bold",
      color: "#000",
      textAlign: "center",
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    subHeader: {
      textAlign: "center",
      fontSize: 20,
      padding: 20,
      justifyContent: "center",
      fontWeight: "bold",
      color: theme.colors.black,
    },
    modalButton: {
      backgroundColor: theme.colors.modalButton,
      borderBottomEndRadius: 15,
      borderBottomStartRadius: 15,
      padding: 10,
    },
    modalView: {
      backgroundColor: theme.colors.modalDescription,
      padding: 20,
      height: "40%",
      justifyContent: "center",
    },
    modalDescription: {
      textAlign: "center",
      margin: 20,
      fontSize: 15,
      alignContent: "center",
      color: theme.colors.black,
    },
  });
};

export default styles;
