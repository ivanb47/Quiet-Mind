import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  View,
} from "react-native";
import React, { useState } from "react";
import QuoteBox from "../../components/QuoteBox";
import SuggestionCard from "../../components/SuggestionCard";
import ItemCard from "../../components/ItemCard";
import { ShowAllButton } from "../../components/ReusableComponents";
import styles from "./homeStyles";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { QuoteAPI } from "../../networkCode/QuoteAPI";

const Home = () => {
  
  const { theme } = useTheme();
  const homeStyles = styles();
  const windowWidth = Dimensions.get("window").width;
  const items = [
    {
      id: 1,
      title: "Title",
      description: "Description",
      image: require("../../assets/images/Placeholder.png"),
      type: "type",
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
      image: require("../../assets/images/Placeholder.png"),
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

  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          theme.colors.background,
          theme.colors.bgGradientStart,
          theme.colors.bgGradientEnd,
        ]}
      >
        <ScrollView style={homeStyles.contentContainer}>
          <View>
            <Text
              style={[
                homeStyles.titleText,
                { textAlign: "center", paddingVertical: 20 },
              ]}
            >
              LOGO
            </Text>
          </View>
          <Text style={homeStyles.titleText}>Quote of the day</Text>
          <QuoteBox style={homeStyles} />
          
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
          <Text style={homeStyles.titleText}>Exercises</Text>
          <FlatList
            data={items}
            horizontal={true}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ItemCard style={homeStyles} item={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={() => <ShowAllButton onPress={() => {}} />}
            ListFooterComponentStyle={{
              alignSelf: "center",
              marginTop: 20,
              marginRight: 20,
            }}
          />
          <Text style={homeStyles.titleText}>Musics</Text>
          <FlatList
            data={items}
            horizontal={true}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ItemCard style={homeStyles} item={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={() => <ShowAllButton onPress={() => {}} />}
            ListFooterComponentStyle={{
              alignSelf: "center",
              marginTop: 20,
              marginRight: 20,
            }}
          />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
