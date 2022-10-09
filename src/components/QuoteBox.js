import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
const QuoteBox = ({ quote, quoteBy }) => {
  const style = styles();
  return (
    <View style={[style.quoteContainer, style.backgroundShadow]}>
      <View style={style.quoteTextContainer}>
        <Image
          source={require("../assets/images/quote.png")}
          style={style.quoteImage}
          mode="contain"
        />
        <Text style={style.quoteText}>{quote}</Text>
        <Image
          source={require("../assets/images/quote.png")}
          style={[
            style.quoteImage,
            { transform: [{ rotate: "180deg" }], alignSelf: "flex-end" },
          ]}
          mode="contain"
        />
      </View>
      <Text style={style.quoteByText}> — {quoteBy}</Text>
    </View>
  );
};

export default QuoteBox;
