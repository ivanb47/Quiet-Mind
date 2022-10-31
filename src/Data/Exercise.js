import {
    ScrollView,
    Text,
    SafeAreaView,
    Dimensions,
    FlatList,
    Image,
    View,
  } from "react-native";

  const Exercise = () => {
    const { theme } = useTheme();
    const windowWidth = Dimensions.get("window").width;
    
  const items = [
    {
      id: 1,
      title: "Reading",
      description: "Losing yourself in a good book has been shown to reduce your levels of stress. Research by Dr David Lewis showed that reading as little as six minutes a day can reduce stress levels by 60% by reducing your heart rate, easing muscle tension and altering your state of mind.",
      //image: require("../../assets/images/Reading_exe.png"),
      type: "type",
    },
    {
      id: 2,
      title: "Deep breathing",
      description: "When we take deep breaths, signals are sent to our brains, telling us to calm down and relax. These messages are translated throughout our bodies, reducing tension and relieving stress when we are anxious or feel overwhelmed.",
     // image: require("../../assets/images/Breathing_exe.png"),
      type: "type",
    },
    {
      id: 3,
      title: "Laughing",
      description: " type of therapy that uses humor to help relieve pain and stress and improve a person's sense of well-being. It may be used to help people cope with a serious disease, such as cancer. Laughter therapy may include laughter exercises, clowns, and comedy movies, books, games, and puzzles.",
      //image: require("../../assets/images/Laughing_exe.png"),
      type: "type",
    },
  ];
  
};

export default Exercise;
