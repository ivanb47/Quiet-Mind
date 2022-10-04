import { ScrollView, Text, SafeAreaView } from "react-native";
import React from "react";
import { useTheme } from "@rneui/themed";
import styles from "./homeStyles";
import { ThemeProvider } from "@rneui/themed";
const Home = () => {
  const homeStyles = styles();
  return (
    <ThemeProvider>
      <SafeAreaView style={homeStyles.container}>
        <ScrollView>
          <Text>home</Text>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default Home;
