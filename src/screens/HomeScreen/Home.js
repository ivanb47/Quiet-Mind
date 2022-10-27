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
import { ShowAllButton } from "../../components/ReusableComponents";
import styles from "./homeStyles";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { QuoteAPI } from "../../networkCode/QuoteAPI";
import { useLinkProps } from "@react-navigation/native";
import ModalComponent from '../../components/ModalComponent'

const Home = (props) => {
  const [quoteAPI , setQuoteAPI] = useState();
  const { theme } = useTheme();
  const homeStyles = styles();
  const [showModal, setShowModal] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  useEffect(() => {
    QuoteAPI().then((res) => {
      console.log("Result: ", res);
      res.status ?
      setQuoteAPI(res)
       :
      setQuoteAPI({ quote: "Be yourself; everyone else is already taken.", quoteBy: "Oscar Wilde" });
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
          <QuoteBox style={homeStyles} quote={quoteAPI?.quote} quoteBy={quoteAPI?.quoteBy} />
          
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
              <SuggestionCard style={homeStyles} item={item} onPress={() => {
                console.log("pressed")
                setShowModal(true)}}/>
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={() => <ShowAllButton onPress={() => {
              props.navigation.navigate("CardsList")
            }} />}
            ListFooterComponentStyle={{
              alignSelf: "center",
              marginTop: 20,
              marginRight: 20,
            }}
          />
          <Text style={homeStyles.titleText}>Exercises</Text>
          <FlatList
            data={items}
            horizontal={true}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ItemCard style={homeStyles} item={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={() => <ShowAllButton onPress={() => {
              props.navigation.navigate("ExerciseList")
            }} />}
            ListFooterComponentStyle={{
              alignSelf: "center",
              marginTop: 20,
              marginRight: 20,
            }}
          />
          <Text style={homeStyles.titleText}>Musics</Text>
          <FlatList
            data={items}
            horizontal={true}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ItemCard style={homeStyles} item={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={() => <ShowAllButton onPress={() => {
              props.navigation.navigate("MusicList")
            }} />}
            ListFooterComponentStyle={{
              alignSelf: "center",
              marginTop: 20,
              marginRight: 20,
            }}
          />
        </ScrollView>
      </LinearGradient>
      {<ModalComponent isVisible={showModal} hideModal = {()=>setShowModal(false)}/>}
    </SafeAreaView>
  );
};

export default Home;