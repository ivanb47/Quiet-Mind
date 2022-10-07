import { StyleSheet, Platform, StatusBar } from "react-native";
import { useTheme } from "@rneui/themed";
import { globalStyles } from "../GlobalStyles";
const styles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    mainContainer: {
        backgroundColor: theme.colors.background,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
    titleText: {
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: globalStyles.fontSet.title1,
        color: theme.colors.primary,
      },
      subTitleText:{
        fontSize: globalStyles.fontSet.title3,
        paddingLeft: 20,
        paddingTop: 10,
        color: theme.colors.grey0
      },
      preferencesText: {
        flex: 1,
        fontSize: globalStyles.fontSet.headline,
        paddingLeft: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        color: theme.colors.primary,
        
      },
     swiches:{
      marginRight: 20
      
     }
  });
};

export default styles;