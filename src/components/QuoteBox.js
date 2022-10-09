import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const QuoteBox = () => {

  const style = styles();
  // console.log(quote);
  // console.log(quoteBy);
  return (
    <View style={[style.quoteContainer, style.backgroundShadow]}>
      <View style={style.quoteTextContainer}>
        <Image
          source={require("../assets/images/quote.png")}
          style={style.quoteImage}
          mode="contain"
        />
        <Text style={style.quoteText}></Text>
        <Image
          source={require("../assets/images/quote.png")}
          style={[
            style.quoteImage,
            { transform: [{ rotate: "180deg" }], alignSelf: "flex-end" },
          ]}
          mode="contain"
        />
      </View>
      <Text style={style.quoteByText}></Text>
    </View>
  );
};

export default QuoteBox;
