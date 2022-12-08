import { SafeAreaView, FlatList, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { subscribeFavoriteAdvices } from "../../firebase/firebaseCalls";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "../CardsListScreen/cardStyle";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "@rneui/themed";
import SuggestionCard from "../../components/SuggestionCard";
import ModalComponent from "../../components/ModalComponent";
import advices from "../../Data/advices";

const Chat = () => {
  const [favoriteAdvices, setFavoriteAdvices] = useState([]);
  const { theme } = useTheme();
  const cardStyle = styles();
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [adviceItem, setAdviceItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    subscribeFavoriteAdvices((favoriteAdvices) => {
      setFavoriteAdvices(
        advices.filter((advice) => {
          return favoriteAdvices?.favoriteAdvice?.includes(advice?.id);
        })
      );
      setLoading(false);
    });
  }, []);
  return (
    <SafeAreaView style={cardStyle.mainContainer}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={[
          theme.colors.background,
          theme.colors.bgGradientStart,
          theme.colors.bgGradientEnd,
        ]}
      >
        <FlatList
          data={favoriteAdvices}
          ListEmptyComponent={() =>
            loading ? (
              <ActivityIndicator size={"large"} />
            ) : (
              <Text style={cardStyle.headerText}>
                No Favorite advices, start liking advices to see them here.
              </Text>
            )
          }
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

export default Chat;
