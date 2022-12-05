import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  Share,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import QuoteBox from "../../components/QuoteBox";
import SuggestionCard from "../../components/SuggestionCard";
import ItemCard from "../../components/ItemCard";
import MusicCard from "../../components/MusicCard";
import { ShowAllButton } from "../../components/ReusableComponents";
import styles from "./homeStyles";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { QuoteAPI, SuggestionAPI } from "../../networkCode/APIs";
import { useLinkProps } from "@react-navigation/native";
import { Audio } from "expo-av";
import ModalComponent from "../../components/ModalComponent";
import FeelingBoredModal from "../../components/FeelingBoredModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import excercises from "../../Data/excercise";
import advices from "../../Data/advices";
import songs from "../../Data/songs";
const Home = (props) => {
  const [quoteAPI, setQuoteAPI] = useState();
  const { theme } = useTheme();
  const homeStyles = styles();
  const [showModal, setShowModal] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const [adviceItem, setAdviceItem] = useState(advices[0]);
  const [suggestion, setSuggestion] = useState("Call your closest friend");
  const [showFeelingBoredModal, setShowFeelingBoredModal] = useState(false);
  // sound related

  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSongIndex, setPlayingSongIndex] = useState(null);

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const selectTop5Songs = () => {
    return songs.filter((item) => {
      return item.id < 5 && item;
    });
  };
  const PlayAudio = async (item) => {
    const result = await sound?.getStatusAsync();
    const { sound } = await Audio.Sound.createAsync(item.url);
    setSound(sound);
    setPlayingSongIndex(item.id);
    setIsPlaying(true);
    await sound.playAsync();
  };
  const PauseAudio = async () => {
    if (isPlaying === true) {
      await sound?.pauseAsync();
      setIsPlaying(false);
    }
  };
  const PlayPauseAudio = (item) => {
    if (playingSongIndex == null) {
      PlayAudio(item);
      return;
    }
    if (item.id === playingSongIndex) {
      if (isPlaying) {
        PauseAudio();
      } else {
        PlayAudio(item);
      }
    } else {
      isPlaying && PauseAudio();
      setPlayingSongIndex(item.id);
      PlayAudio(item);
    }
  };
  useEffect(() => {
    QuoteAPI().then((res) => {
      res.status
        ? setQuoteAPI(res)
        : setQuoteAPI({
            quote: "Be yourself; everyone else is already taken.",
            quoteBy: "Oscar Wilde",
          });
    });
  }, []);

  const selectTop5Exe = () => {
    return excercises.filter((item) => {
      return item.id < 5 && item;
    });
  };

  const fetchSuggestion = () => {
    SuggestionAPI()
      .then((res) => {
        res.status
          ? setSuggestion(res.suggestion)
          : setSuggestion("Error fetching suggestion");
      })
      .then(() => {
        setShowFeelingBoredModal(true);
      });
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: quoteAPI?.quote + " - " + quoteAPI?.quoteBy,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of " + result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          theme.colors.background,
          theme.colors.bgGradientStart,
          theme.colors.bgGradientEnd,
        ]}
      >
        <ScrollView style={homeStyles.contentContainer}>
          <View>
            <Image
              source={require("../../assets/Logos/Quiet_mind-blk-1.png")}
              style={homeStyles.logo}
            />
          </View>

          <Text style={homeStyles.titleText}>
            Quote of the day
            <TouchableOpacity>
              <AntDesign
                name="sharealt"
                style={homeStyles.shareIcon}
                size={20}
                color="black"
                onPress={onShare}
                title="Share"
              />
            </TouchableOpacity>
          </Text>
          <QuoteBox
            style={homeStyles}
            quote={quoteAPI?.quote}
            quoteBy={quoteAPI?.quoteBy}
          />
          <TouchableOpacity
            style={[homeStyles.suggestionCardRow, homeStyles.backgroundShadow]}
            onPress={() => {
              fetchSuggestion();
            }}
          >
            <View style={homeStyles.textContainer}>
              <Text style={homeStyles.title}>Feeling bored?</Text>
              <Text
                style={[homeStyles.description, { color: theme.colors.grey2 }]}
              >
                Click to get some suggestion to overcome your boredom
              </Text>
            </View>
            <MaterialCommunityIcons
              name="emoticon-happy-outline"
              style={{ opacity: 0.2 }}
              size={60}
            />
          </TouchableOpacity>
          <Text style={homeStyles.titleText}>Advices</Text>
          <FlatList
            data={advices}
            horizontal={true}
            snapToInterval={windowWidth}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <SuggestionCard
                style={homeStyles}
                item={item}
                onPress={() => {
                  setAdviceItem(item.item);
                  setShowModal(true);
                }}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={() => (
              <ShowAllButton
                onPress={() => {
                  props.navigation.navigate("CardsList");
                }}
              />
            )}
            ListFooterComponentStyle={{
              alignSelf: "center",
              marginTop: 20,
              marginRight: 20,
            }}
          />
          <Text style={homeStyles.titleText}>Exercises</Text>
          <FlatList
            data={selectTop5Exe()}
            horizontal={true}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <ItemCard
                style={homeStyles}
                item={item}
                showDescription={false}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={() => (
              <ShowAllButton
                onPress={() => {
                  props.navigation.navigate("ExerciseList");
                }}
              />
            )}
            ListFooterComponentStyle={{
              alignSelf: "center",
              marginTop: 20,
              marginRight: 20,
            }}
          />

          <Text style={homeStyles.titleText}>Musics</Text>
          <FlatList
            data={selectTop5Songs()}
            horizontal={true}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <MusicCard
                style={homeStyles}
                item={item}
                playingSongIndex={playingSongIndex}
                isPlaying={isPlaying}
                onPress={() => PlayPauseAudio(item.item)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={() => (
              <ShowAllButton
                onPress={() => {
                  props.navigation.navigate("MusicList");
                }}
              />
            )}
            ListFooterComponentStyle={{
              alignSelf: "center",
              marginTop: 20,
              marginRight: 20,
            }}
          />
        </ScrollView>
      </LinearGradient>

      <ModalComponent
        isVisible={showModal}
        advice={adviceItem}
        hideModal={() => setShowModal(false)}
      />
      <FeelingBoredModal
        isVisible={showFeelingBoredModal}
        suggestion={suggestion}
        hideModal={() => setShowFeelingBoredModal(false)}
      />
    </SafeAreaView>
  );
};

export default Home;
