import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import style from "./styles";
import { AntDesign } from "@expo/vector-icons";

const MusicCard = ({ item, onPress, playingSongIndex, isPlaying }) => {
  const { title, description, image, type } = item.item;
  const styles = style();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemCardRow, styles.backgroundShadow]}
    >
      <ImageBackground
        source={image}
        imageStyle={{ borderRadius: 8 }}
        style={styles.songCardImage}
      >
        <View style={[styles.songPlayPauseIcon]}>
          <AntDesign
            name={
              playingSongIndex == null
                ? "playcircleo"
                : playingSongIndex == item.item.id
                ? isPlaying
                  ? "pausecircleo"
                  : "playcircleo"
                : "playcircleo"
            }
            style={styles.backgroundShadow}
            size={60}
            color="white"
          />
        </View>
      </ImageBackground>

      <Text style={[styles.title, { marginTop: 10 }]}>{title}</Text>
      {/* <Text style={styles.description}>{description}</Text> */}
    </TouchableOpacity>
  );
};

export default MusicCard;
