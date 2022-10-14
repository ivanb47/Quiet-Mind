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
import styles from "./exerciselistStyles";
import { LinearGradient } from "expo-linear-gradient";
import ItemCard from "../../components/SuggestionCard";

const ExerciseList = () => {
  const { theme } = useTheme();
  const exerciseStyles = styles();
  const windowWidth = Dimensions.get("window").width;

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
    <SafeAreaView style={exerciseStyles.mainContainer}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          theme.colors.background,
          theme.colors.bgGradientStart,
          theme.colors.bgGradientEnd,
        ]}
      >
        <Text style={exerciseStyles.titleText}>Exercises</Text>
        <TextInput style={exerciseStyles.textInputContainer}
        placeholder="Search exercise"></TextInput>
        <FlatList
          data={items}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <ItemCard style={exerciseStyles} item={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ExerciseList;
