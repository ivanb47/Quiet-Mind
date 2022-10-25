import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  View,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./cardStyle";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "@rneui/themed";
import SuggestionCard from "../../components/SuggestionCard";

const CardsList = () => {
  const { theme } = useTheme();
  const cardStyle = styles();
  const windowWidth = Dimensions.get("window").width;
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  const items = [
    {
      id: 1,
      title: "Breathing",
      description: "Lorem Ipsum is simply dummy text of the",
      image: require("../../assets/images/run.png"),
      type: "type",
    },
    {
      id: 2,
      title: "Meditation",
      description: "Lorem Ipsum is simply dummy text of the.",
      image: require("../../assets/images/run.png"),
      type: "type",
    },
    {
      id: 3,
      title: "Yoga",
      description: "Lorem Ipsum is simply dummy text of the.",
      image: require("../../assets/images/run.png"),
      type: "type",
    },
    {
      id: 4,
      title: "Swimming",
      description: "Lorem Ipsum is simply dummy text of the.",
      image: require("../../assets/images/run.png"),
      type: "type",
    },
    {
      id: 5,
      title: "Boxing",
      description: "Lorem Ipsum is simply dummy text of the",
      image: require("../../assets/images/run.png"),
      type: "type",
    },
    {
      id: 6,
      title: "Cycling",
      description: "Lorem Ipsum is simply dummy text of the",
      image: require("../../assets/images/run.png"),
      type: "type",
    },
    {
      id: 7,
      title: "Jogging or running",
      description: "Lorem Ipsum is simply dummy text of the.",
      image: require("../../assets/images/run.png"),
      type: "type",
    },
  ];

  return (
    <SafeAreaView style={cardStyle.mainContainer}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          theme.colors.background,
          theme.colors.bgGradientStart,
          theme.colors.bgGradientEnd,
        ]}
      >
        
        <FlatList
          data={items}
          ListHeaderComponent={()=>(
          <SearchBar 
            placeholder="Type Here..."
            inputContainerStyle={[cardStyle.textInputContainer, cardStyle.backgroundShadow]}
            onChangeText={updateSearch}
            value={search}
          />
          )}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <SuggestionCard style={cardStyle} item={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CardsList;
