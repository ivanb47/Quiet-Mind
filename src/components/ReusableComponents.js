import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
export const ShowAllButton = ({ onPress }) => {
  const style = styles();
  return (
    <TouchableOpacity onPress={onPress} style={style.showAllContainer}>
      <Image
        style={style.arrow}
        resizeMode="contain"
        source={require("../assets/images/arrow.png")}
      />
      <Text style={style.text}>Show all</Text>
    </TouchableOpacity>
  );
};
