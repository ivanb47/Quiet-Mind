import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./styles";
import { Button } from "@rneui/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

const ModalComponent = (props) => {
  const { isVisible, onClose, suggestion } = props;
  const { theme } = useTheme();
  const homeStyles = styles();
  const style = styles();
  const happyColors = [
    "#FFD700",
    "#FFD700",
    "#ff9a55",
    "#ffea6c",
    "#54fffb",
    "#e7b2ff",
    "#89ffcc",
    "#FFFBC1",
    "#FF8787",
    "#B1AFFF",
    "#FFDEB4",
  ];
  function random() {
    const num = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    return num;
  }
  return (
    <Modal
      animationType="fade"
      style={style.modalBG}
      visible={isVisible}
      transparent={true}
      onDismiss={props.hideModal}
      onBackdropPress={props.hideModal}
      onRequestClose={props.hideModal}
    >
      <View
        style={[
          style.suggestionModal,
          style.backgroundShadow,
          { backgroundColor: happyColors[random()] },
        ]}
      >
        <Text style={style.suggestionHeader}>{suggestion}</Text>
        <MaterialCommunityIcons
          name="emoticon-happy-outline"
          style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.05 }}
          size={90}
        />
      </View>
    </Modal>
  );
};

export default ModalComponent;
