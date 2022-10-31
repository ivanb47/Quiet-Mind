import { Modal, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./styles";
import { Button } from "@rneui/base";
import advices from "../Data/advices";
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

        <Text style={style.header}>{advices.title}</Text>
        <Image
          style={style.tinyLogo}
          source={advices.image}
        />
        <Text style={style.subHeader}>
          {advices.adviceShort}
        </Text>
        <View style={style.modalView}>
          <Text style={style.modalDescription}>
            {advices.adviceLong}
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
