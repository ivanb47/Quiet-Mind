import { Modal, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./styles";
import { Button } from "@rneui/base";
const ModalComponent = (props) => {
  const { isVisible } = props;
  const { theme } = useTheme();
  const homeStyles = styles();
  const style = styles();
  console.log("Is visible:", isVisible);

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent={true}
      onDismiss={props.hideModal}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        props.hideModal();
      }}
    >
      <View style={[style.modal, style.backgroundShadow]}>
        <TouchableOpacity
          style={[style.closeButton, style.backgroundShadow]}
          onPress={() => props.hideModal()}
          activeOpacity={1}
        >
          <Text>X</Text>
        </TouchableOpacity>

        <Text style={style.header}>Having trouble attending class ?</Text>
        <Image
          style={style.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={style.subHeader}>
          Take a moment to sit in a quiet place.
        </Text>
        <View style={style.modalView}>
          <Text style={style.modalDescription}>
            Schedule a time to sit undisturbed by devices to reflect on and define your priorties.
          </Text>
        </View>
        <Button style={style.modalButton}>
          see more
        </Button>
      </View>
    </Modal>
  );
};

export default ModalComponent;
