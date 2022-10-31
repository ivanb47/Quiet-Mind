import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import QuoteBox from "../../components/QuoteBox";
import SuggestionCard from "../../components/SuggestionCard";
import ItemCard from "../../components/ItemCard";
import MusicCard from "../../components/MusicCard";
import { ShowAllButton } from "../../components/ReusableComponents";
import styles from "./homeStyles";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { QuoteAPI } from "../../networkCode/QuoteAPI";
import { useLinkProps } from "@react-navigation/native";
import { Audio } from "expo-av";
import ModalComponent from "../../components/ModalComponent";

import Exercise from "../../Data/Exercise";

import songs from "../../Data/songs";
const Home = (props) => {
  const [quoteAPI, setQuoteAPI] = useState();
  const { theme } = useTheme();
  const homeStyles = styles();
  const [showModal, setShowModal] = useState(false);
  const windowWidth = Dimensions.get("window").width;

  // sound related

  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSongIndex, setPlayingSongIndex] = useState(null);

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
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
    console.log("Pausing Audio", sound.pauseAsync());
    if (isPlaying === true) {
      await sound?.pauseAsync();
      setIsPlaying(false);
    }
  };
  const PlayPauseAudio = (item) => {
    console.log("Playing Audio", item);
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
      console.log("Result: ", res);
      res.status
        ? setQuoteAPI(res)
        : setQuoteAPI({
            quote: "Be yourself; everyone else is already taken.",
            quoteBy: "Oscar Wilde",
          });
    });
  }, []);

  const items = [
    {
      id: 1,
      title: "Title",
      description: "Description",
      image: require("../../assets/images/Placeholder.png"),
      type: "type",
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
      image: require("../../assets/images/Placeholder.png"),
      type: "type",
    },
    {
      id: 3,
      title: "Title",
      description: "Description",
      image: require("../../assets/images/quote.png"),
      type: "type",
    },
  ];

  const Exercise = [
    {
      id: 1,
      title: "Reading",
      image: require("../../assets/images/Reading_exe.png"),
      type: "type",
    },
    {
      id: 2,
      title: "Deep breathing",
      image: require("../../assets/images/Breathing_exe.png"),
      type: "type",
    },
    {
      id: 3,
      title: "Laughing",
      image: require("../../assets/images/Laughing_exe.png"),
      type: "type",
    },
  ];

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
            <Text
              style={[
                homeStyles.titleText,
                { textAlign: "center", paddingVertical: 20 },
              ]}
            >
              LOGO
            </Text>
          </View>
          <Text style={homeStyles.titleText}>Quote of the day</Text>
          <QuoteBox
            style={homeStyles}
            quote={quoteAPI?.quote}
            quoteBy={quoteAPI?.quoteBy}
          />

          <Text style={homeStyles.titleText}>Placeholder</Text>
          <FlatList
            data={items}
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
                  console.log("pressed");
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
            data={Exercise}
            horizontal={true}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ItemCard style={homeStyles} item={item} />}
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
      {
        <ModalComponent
          isVisible={showModal}
          hideModal={() => setShowModal(false)}
        />
      }
    </SafeAreaView>
  );
};

export default Home;
