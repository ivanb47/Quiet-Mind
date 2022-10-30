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
import styles from "./musicListStyles";
import { LinearGradient } from "expo-linear-gradient";
import songs from "../../Data/songs";
import { SearchBar } from "@rneui/themed";
import MusicCard from "../../components/MusicCard";
import { Audio } from "expo-av";

const MusicList = () => {
  const { theme } = useTheme();
  const musicStyles = styles();
  const windowWidth = Dimensions.get("window").width;
  const [search, setSearch] = useState("");
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
  const updateSearch = (search) => {
    setSearch(search);
  };

  const headerComponent = () => {
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          inputContainerStyle={[
            musicStyles.textInputContainer,
            musicStyles.backgroundShadow,
          ]}
          containerStyle={musicStyles.searchbarContainer}
          onChangeText={updateSearch}
          value={search}
        />
        <Text style={musicStyles.musicHeader}>
          Plug in your headphones and enjoy the music.🎧
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={musicStyles.mainContainer}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          theme.colors.background,
          theme.colors.bgGradientStart,
          theme.colors.bgGradientEnd,
        ]}
      >
        <FlatList
          data={songs}
          ListHeaderComponent={headerComponent}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <MusicCard
              style={musicStyles.cardHeight}
              playingSongIndex={playingSongIndex}
              isPlaying={isPlaying}
              item={item}
              onPress={() => PlayPauseAudio(item.item)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MusicList;
