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
  import styles from "./musicListStyles";
  import { LinearGradient } from "expo-linear-gradient";
  import ItemCard from "../../components/SuggestionCard";
  
  const MusicList = () => {
    const { theme } = useTheme();
    const musicStyles = styles();
    const windowWidth = Dimensions.get("window").width;
  
    const items = [
      {
        id: 1,
        title: "As It Was",
        description: "Lorem Ipsum is simply dummy text of the",
        image: require("../../assets/images/play.png"),
        type: "type",
      },
      {
        id: 2,
        title: "You Proof",
        description: "Lorem Ipsum is simply dummy text of the.",
        image: require("../../assets/images/play.png"),
        type: "type",
      },
      {
        id: 3,
        title: "Sunroof",
        description: "Lorem Ipsum is simply dummy text of the.",
        image: require("../../assets/images/play.png"),
        type: "type",
      },
      {
        id: 4,
        title: "I Ain't Worried",
        description: "Lorem Ipsum is simply dummy text of the.",
        image: require("../../assets/images/play.png"),
        type: "type",
      },
      {
        id: 5,
        title: "I Like You",
        description: "Lorem Ipsum is simply dummy text of the",
        image: require("../../assets/images/play.png"),
        type: "type",
      },
      {
        id: 6,
        title: "Unholy",
        description: "Lorem Ipsum is simply dummy text of the",
        image: require("../../assets/images/play.png"),
        type: "type",
      },
      {
        id: 7,
        title: "Bad Habit",
        description: "Lorem Ipsum is simply dummy text of the.",
        image: require("../../assets/images/play.png"),
        type: "type",
      },
    ];
  
    return (
      <SafeAreaView style={musicStyles.mainContainer}>
        <LinearGradient
          // Button Linear Gradient
          colors={[
            theme.colors.background,
            theme.colors.bgGradientStart,
            theme.colors.bgGradientEnd,
          ]}
        >
          <Text style={musicStyles.titleText}>Music</Text>
          <TextInput style={musicStyles.textInputContainer}
          placeholder="Search music"></TextInput>
          <FlatList
            data={items}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ItemCard style={musicStyles} item={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </LinearGradient>
      </SafeAreaView>
    );
  };
  
  export default MusicList;
  