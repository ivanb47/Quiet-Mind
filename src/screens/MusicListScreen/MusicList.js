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
import React, { useState, useMemo } from "react";
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
  const [filteredSongs, setFilteredSongs] = useState(songs);
  React.useEffect(() => {
    return sound
      ? () => {
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
  const updateSearch = (search) => {
    setSearch(search);
    const filteredSongs = songs.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredSongs(filteredSongs);
  };

  const headerComponent = useMemo(() => {
    return (
      <View>
        <SearchBar
          placeholder="Search for sounds"
          inputContainerStyle={[
            musicStyles.textInputContainer,
            musicStyles.backgroundShadow,
          ]}
          inputStyle={musicStyles.textInput}
          containerStyle={musicStyles.searchbarContainer}
          onChangeText={updateSearch}
          value={search}
        />
        {search.length == 0 && (
          <Text style={musicStyles.musicHeader}>
            Plug in your headphones and enjoy the calming music.🎧
          </Text>
        )}
      </View>
    );
  }, [search]);
  return (
    <SafeAreaView style={musicStyles.mainContainer}>
      <LinearGradient
        // Button Linear Gradient
        style={{ flex: 1 }}
        colors={[
          theme.colors.background,
          theme.colors.bgGradientStart,
          theme.colors.bgGradientEnd,
        ]}
      >
        <FlatList
          data={search.length > 0 ? filteredSongs : songs}
          ListHeaderComponent={headerComponent}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={musicStyles.musicHeader}>
              No music found for "{search}"
            </Text>
          }
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
