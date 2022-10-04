import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  View,
} from "react-native";
import React from "react";
import QuoteBox from "../../components/QuoteBox";
import SuggestionCard from "../../components/SuggestionCard";
import { ShowAllButton } from "../../components/ReusableComponents";
import styles from "./homeStyles";
import { ThemeProvider, useTheme } from "@rneui/themed";
const Home = () => {
  const { theme } = useTheme();
  const homeStyles = styles();
  const windowWidth = Dimensions.get("window").width;
  const items = [
    {
      id: 1,
      title: "Title",
      description: "Description",
      image: require("../../assets/images/quote.png"),
      type: "type",
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
      image: require("../../assets/images/quote.png"),
      type: "type",
    },
    {
      id: 3,
      title: "Title",
      description: "Description",
      image: require("../../assets/images/quote.png"),
      type: "type",
    },
  ];
  const quote =
    "We cannot solve problems with the kind of thinking we employed when we came up with them.";
  const quoteBy = "Albert Einstein";
  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      <ScrollView style={homeStyles.contentContainer}>
        <Text style={homeStyles.titleText}>Quote of the day</Text>
        <QuoteBox style={homeStyles} quote={quote} quoteBy={quoteBy} />
        <Text style={homeStyles.titleText}>Placeholder</Text>
        <FlatList
          data={items}
          horizontal={true}
          snapToInterval={windowWidth}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <SuggestionCard style={homeStyles} item={item} />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListFooterComponent={() => <ShowAllButton onPress={() => {}} />}
          ListFooterComponentStyle={{
            alignSelf: "center",
            marginTop: 20,
            marginRight: 20,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
