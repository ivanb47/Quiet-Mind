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
import excercises from "../../Data/excercise";


const ExerciseList = () => {
  const { theme } = useTheme();
  const exerciseStyles = styles();
  const windowWidth = Dimensions.get("window").width;
  const [search, setSearch] = useState("");
  const [filteredExercises, setFilteredExercises] = useState([]);
  const updateSearch = (search) => {
    setSearch(search);
    const filteredExc = excercises.filter((excercises) => {
      return excercises.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredExercises(filteredExc);
  };
  
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
          data={filteredExercises.length > 0 ? filteredExercises : excercises}
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
