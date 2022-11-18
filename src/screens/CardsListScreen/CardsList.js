import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  View,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./cardStyle";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "@rneui/themed";
import SuggestionCard from "../../components/SuggestionCard";
import ModalComponent from "../../components/ModalComponent";
import advices from "../../Data/advices";
const CardsList = () => {
  const { theme } = useTheme();
  const cardStyle = styles();
  const windowWidth = Dimensions.get("window").width;
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [adviceItem, setAdviceItem] = useState(advices[0]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <SafeAreaView style={cardStyle.mainContainer}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          theme.colors.background,
          theme.colors.bgGradientStart,
          theme.colors.bgGradientEnd,
        ]}
      >
        <FlatList
          data={advices}
          ListHeaderComponent={() => (
            <SearchBar
              placeholder="Type Here..."
              inputContainerStyle={[
                cardStyle.textInputContainer,
                cardStyle.backgroundShadow,
              ]}
              onChangeText={updateSearch}
              value={search}
            />
          )}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <SuggestionCard
              style={cardStyle}
              item={item}
              onPress={() => {
                setAdviceItem(item.item);
                setShowModal(true);
              }}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </LinearGradient>
      {
        <ModalComponent
          isVisible={showModal}
          advice={adviceItem}
          hideModal={() => setShowModal(false)}
        />
      }
    </SafeAreaView>
  );
};

export default CardsList;
