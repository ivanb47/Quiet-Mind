import { StyleSheet } from "react-native";
import { useTheme } from "@rneui/themed";

const styles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
};

export default styles;
