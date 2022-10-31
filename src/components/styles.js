import { StyleSheet, Platform, Dimensions } from "react-native";
import { useTheme } from "@rneui/themed";
import { globalStyles } from "../screens/globalStyles";
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
    closeButton: {
      height: 25,
      width: 25,
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
      marginBottom: 200,
      marginTop: 100,
      marginStart: 20,
      marginEnd: 20,
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
      paddingTop: 5,
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
    tinyLogo: {
      width: 100,
      height: 100,
      margin: 20,
      alignSelf: "center",
      backgroundColor: theme.colors.white,
      borderRadius: 50,
    },
    header: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30,
      paddingHorizontal: 20,
      marginTop: 60,
      height: "20%"
    },
    subHeader: {
      textAlign: "center",
      fontSize: 20,
      padding:20,
      justifyContent:'center'

    },
    modalButton:{
      backgroundColor: theme.colors.modalButton,
    },
    modalView: {
      backgroundColor: theme.colors.modalDescription,
      padding: 20,
      height:"40%",
      justifyContent:'center'
    },
    modalDescription: {
      textAlign: "center",
      margin: 20,
      fontSize: 15,
      alignContent:'center'
    },
  });
};

export default styles;
