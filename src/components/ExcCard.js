import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import style from "./styles";

const ExcCard = ({ item, onPress, showDescription }) => {
  const { title, description, image, type } = item.item;
  const styles = style();
  return (
    <View style={[styles.itemCardRow, styles.backgroundShadow]}>
      <Image source={image} style={styles.itemCardImage} />

      <Text style={[styles.title, { marginTop: 10 }]}>{title}</Text>
      {showDescription != undefined && showDescription == false ? (
        <></>
      ) : (
        <Text style={styles.description}>{description}</Text>
      )}
    </View>
  );
};

export default ExcCard;
