import { TouchableOpacity, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./styles";
import { Button } from "@rneui/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import {
  addFavoriteAdvice,
  removeFavoriteAdvice,
  fetchUser,
} from "../firebase/firebaseCalls";
import Toast from "react-native-toast-message";
const ModalComponent = (props) => {
  const { isVisible, onClose, advice } = props;
  const { theme } = useTheme();
  const homeStyles = styles();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    fetchUser().then((user) => {
      if (user.favoriteAdvice.includes(advice.id)) {
        console.log("is favorite");
        setIsFavorite(true);
      } else {
        console.log("is not favorite");
        setIsFavorite(false);
      }
    });
  }, [advice]);
  const style = styles();
  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent={true}
      style={style.modalBG}
      onDismiss={props.hideModal}
      onBackdropPress={props.hideModal}
      onRequestClose={props.hideModal}
    >
      <Toast position="bottom" />
      <View style={[style.modal, style.backgroundShadow]}>
        <TouchableOpacity
          onLongPress={() => {
            Toast.show({
              type: "success",
              text1: !isFavorite
                ? "Save advice to favorites list"
                : "Remove advice from favorites list",
            });
          }}
          onPress={() => {
            !isFavorite
              ? addFavoriteAdvice(advice.id, setIsFavorite)
              : removeFavoriteAdvice(advice.id, setIsFavorite);
          }}
          style={[
            style.closeButton,
            style.backgroundShadow,
            {
              backgroundColor: isFavorite
                ? theme.colors.error
                : theme.colors.white,
            },
          ]}
        >
          <AntDesign
            name={isFavorite ? "heart" : "hearto"}
            size={20}
            color={isFavorite ? theme.colors.white : theme.colors.black}
          />
        </TouchableOpacity>

        <Text style={style.header}>{advice?.title}</Text>
        <View style={[style.tinyLogo, style.backgroundShadow]}>
          <MaterialCommunityIcons name={advice?.image} size={80} />
        </View>

        <Text style={style.subHeader}>{advice?.advicehort}</Text>
        <View style={style.modalView}>
          <Text style={style.modalDescription}>{advice?.adviceLong}</Text>
        </View>

        <Button buttonStyle={style.modalButton}>see more</Button>
      </View>
    </Modal>
  );
};

export default ModalComponent;
