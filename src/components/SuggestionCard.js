import {
  Alert,
  Modal,
  Pressable,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import ModalComponent from "./ModalComponent"
import React, { useState } from "react";
import style from "./styles";
const SuggestionCard = ({ item ,onPress}) => {
  const { title, adviceShort, image, type } = item.item;
 
  const styles = style();
  return (
    <TouchableOpacity
      style={[styles.suggestionCardRow, styles.backgroundShadow]}
      onPress={()=> {onPress(),console.log("bcd")}}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{adviceShort}</Text>
      </View>
      <Image source={image} style={styles.suggestionImage} />
     
    </TouchableOpacity>
  
  );
};

export default SuggestionCard;
