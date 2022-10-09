import { useEffect, useState } from "react";
import {View, Text, ActivityIndicator } from "react-native";
//https://reactnative.dev/movies.json
const quoteURL = "https://zenquotes.io/api/today"
const QuoteAPI = () =>{
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

    useEffect(() => {
        fetch(quoteURL)
          .then(res => res.json())
          .then((result) => {setIsLoading(false);
            
              setResponse(result[0].q);
            },
            (error) => {
              setIsLoading(false);
              setError(error);
            }
          )
      }, []);
      
      const getContent = () => {
        if (isLoading) {
          return <ActivityIndicator size="large" />;
        }
    
        if (error) {
          return <Text>{error}</Text>
        }
        
        return <Text>{response}</Text>;
      };
    
      return (
        <View>
          {getContent()}
        </View>
      );
}

  export default QuoteAPI;