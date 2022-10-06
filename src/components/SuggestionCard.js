import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import style from "./styles";
const SuggestionCard = ({ item }) => {
  const { title, description, image, type } = item.item;
  const styles = style();
  return (
    <TouchableOpacity
      onPress={() => console.log("pressed")}
      style={[styles.suggestionCardRow, styles.backgroundShadow]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Image source={image} style={styles.suggestionImage} />
    </TouchableOpacity>
  );
};

export default SuggestionCard;
