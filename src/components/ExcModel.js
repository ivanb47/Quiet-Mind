import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./styles";
import { Button } from "@rneui/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import ExcCard from "./ExcCard";
const ModalComponent = (props) => {
  const { isVisible, hideModal, item } = props;
  const { theme } = useTheme();
  const homeStyles = styles();
  const style = styles();

  return (
    <Modal
      animationType="fade"
      style={style.modalBG}
      visible={isVisible}
      transparent={true}
      onDismiss={hideModal}
      onBackdropPress={hideModal}
      onRequestClose={hideModal}
    >
      <ExcCard style={homeStyles} item={item} showDescription={true} />
    </Modal>
  );
};

export default ModalComponent;
