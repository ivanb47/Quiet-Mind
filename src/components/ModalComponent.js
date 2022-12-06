import { TouchableOpacity, Text, View, ScrollView } from "react-native";
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
  const [isDetailPage, setDetailPage] = useState(false);
  const [buttonText, setButtonText] = useState("See more");

  const toggler = () => {
    if (isDetailPage) {
      setDetailPage(false);
      setButtonText("See more");
    } else {
      setDetailPage(true);
      setButtonText("Go back");
    }
  };

  useEffect(() => {
    fetchUser().then((user) => {
      if (user.favoriteAdvice.includes(advice.id)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    });
    setDetailPage(false);
    setButtonText("See more");
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
        {isDetailPage == false && (
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
        )}
        {isDetailPage == true ? (
          <ScrollView>
            <Text style={[style.subHeader, { marginTop: 30 }]}>
              {advice?.secondAdviceShort}
            </Text>
            <Text style={style.modalDescription}>
              {advice?.secondAdviceLong}
            </Text>
            <View>
              {advice?.challengeTitle && (
                <Text style={style.subHeader}>{advice?.challengeTitle}</Text>
              )}

              <Text style={[style.modalDescription, { textAlign: "left" }]}>
                {advice?.challengeText}
              </Text>

              <Text style={[style.quoteByText, { paddingBottom: 30 }]}>
                {advice?.reference}
              </Text>
            </View>
          </ScrollView>
        ) : (
          <>
            <Text style={style.header}>{advice?.title}</Text>
            <View style={[style.tinyLogo, style.backgroundShadow]}>
              <MaterialCommunityIcons name={advice?.image} size={80} />
            </View>

            <Text style={style.subHeader}>{advice?.advicehort}</Text>
            <View style={style.modalView}>
              <Text style={style.modalDescription}>{advice?.adviceLong}</Text>
            </View>
          </>
        )}

        <Button onPress={toggler} buttonStyle={style.modalButton}>
          {buttonText}
        </Button>
      </View>
    </Modal>
  );
};

export default ModalComponent;
