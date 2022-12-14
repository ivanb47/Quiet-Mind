import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import style from "./styles";

const ItemCard = ({ item, onPress, showDescription }) => {
  const { title, description, image, type } = item.item;
  const styles = style();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemCardRow, styles.backgroundShadow]}
    >
      <Image source={image} style={styles.itemCardImage} />

      <Text style={[styles.title, { marginTop: 10 }]}>{title}</Text>
      {showDescription != undefined && showDescription == false ? (
        <></>
      ) : (
        <Text style={styles.description}>{description}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ItemCard;