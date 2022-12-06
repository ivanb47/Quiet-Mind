import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import React from "react";
import style from "./styles";
import { MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const SuggestionCard = ({ item, onPress }) => {
  const { title, adviceShort, image, imageType } = item.item;

  const styles = style();
 
  return (
    <TouchableOpacity
      style={[
        styles.suggestionCardRow,
        styles.backgroundShadow,
        { zIndex: -1 },
      ]}
      onPress={() => {
        onPress();
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{adviceShort}</Text>
      </View>
      {imageType === "Ionicons" ? (
        <Ionicons
          name={image}
          size={42}
          style={[styles.icon, { zIndex: 1 }]}
        />
      ) : imageType === "FontAwesome" ? (
        <FontAwesome
          name={image}
          size={42}
          style={[styles.icon, { zIndex: 1 }]}
        />
      ) : imageType === "MaterialIcons" ? (
        <MaterialIcons
          name={image}
          size={42}
          style={[styles.icon, { zIndex: 1 }]}
        />
        ):
      // Default case
      <MaterialCommunityIcons
          name={image}
          size={42}
          style={[styles.icon, { zIndex: 1 }]}
        />}
    </TouchableOpacity>
  );
};

export default SuggestionCard;
