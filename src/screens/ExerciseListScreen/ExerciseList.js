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
import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./exerciselistStyles";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "@rneui/themed";
import ItemCard from "../../components/ItemCard";

const ExerciseList = () => {
  const { theme } = useTheme();
  const exerciseStyles = styles();
  const windowWidth = Dimensions.get("window").width;
  const [search, setSearch] = useState("");
  const [filteredExercises, setFilteredExercises] = useState([]);
  const updateSearch = (search) => {
    setSearch(search);
    const filteredExc = items.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredExercises(filteredExc);
  };
  const items = [
    {
      id: 1,
      title: "Deep Breathing",
      description:
        "When we take deep breaths, signals are sent to our brains, telling us to calm down and relax. These messages are translated throughout our bodies, reducing tension and relieving stress when we are anxious or feel overwhelmed.",
      image: require("../../assets/images/Breathing_exe.png"),
      type: "type",
    },
    {
      id: 2,
      title: "Reading",
      description:
        "Losing yourself in a good book has been shown to reduce your levels of stress. Research by Dr David Lewis showed that reading as little as six minutes a day can reduce stress levels by 60% by reducing your heart rate, easing muscle tension and altering your state of mind.",
      image: require("../../assets/images/Reading_exe.png"),
      type: "type",
    },
    {
      id: 3,
      title: "Yoga",
      description:
        "Yoga's incorporation of meditation and breathing can help improve a person's mental well-being. “Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration.",
      image: require("../../assets/images/Yoga_exe.png"),
      type: "type",
    },
    {
      id: 4,
      title: "Swimming",
      description:
        "Swimming can improve mood in both men and women. For people with fibromyalgia, swimming can decrease anxiety, and exercise therapy in warm water can decrease depression and improve mood.",
      image: require("../../assets/images/Swiming_exe.png"),
      type: "type",
    },
    {
      id: 5,
      title: "Boxing",
      description:
        "Physically, boxing improves cardiovascular fitness, balance, endurance, strength, and hand-eye coordination. Psychologically, it fosters confidence, concentration, resilience, self-awareness, and stress relief.",
      image: require("../../assets/images/Boxing_exe.png"),
      type: "type",
    },
    {
      id: 6,
      title: "Cycling",
      description:
        "Cycling and walking both release our 'feel-good' hormones known as endorphins. These hormones help to relax your mind and make you feel happier. This boosts your mood and reduces your feelings of anxiety. Research shows that those who regularly cycle have a significantly lower risk of feeling stressed.",
      image: require("../../assets/images/Cycling_exe.png"),
      type: "type",
    },
    {
      id: 7,
      title: "Meditation",
      description:
        "The mental health benefits of meditation include better focus and concentration, improved self-awareness and self-esteem, lower levels of stress and anxiety, and fostering kindness. Meditation also has benefits for your physical health, as it can improve your tolerance for pain and help fight substance addiction.",
      image: require("../../assets/images/Meditation_exe.png"),
      type: "type",
    },
  ];

  const headerComponent = useMemo(() => {
    return (
      <View>
        <SearchBar
          placeholder="Search for exercises"
          inputContainerStyle={[
            exerciseStyles.textInputContainer,
            exerciseStyles.backgroundShadow,
          ]}
          inputStyle={exerciseStyles.textInput}
          containerStyle={exerciseStyles.searchbarContainer}
          onChangeText={updateSearch}
          value={search}
        />
      </View>
    );
  }, [search]);

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
        <FlatList
          data={filteredExercises.length > 0 ? filteredExercises : items}
          ListHeaderComponent={headerComponent}
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
