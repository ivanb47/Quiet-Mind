const quoteURL = "https://zenquotes.io/api/today";

export const QuoteAPI = () => {
  return new Promise((resolve, reject) => {
    fetch(quoteURL)
      .then((res) => res.json())
      .then(
        (result) => {
          resolve({ status: true, quote: result[0].q, quoteBy: result[0].a });
        },
        (error) => {
          reject({ status: false, quote: { error }, quoteBy: "Error" });
        }
      );
  });
};

const suggestionURL = "http://www.boredapi.com/api/activity/";

export const SuggestionAPI = () => {
  return new Promise((resolve, reject) => {
    fetch(suggestionURL)
      .then((res) => res.json())
      .then(
        (result) => {
          resolve({ status: true, suggestion: result.activity });
        },
        (error) => {
          reject({ status: false, suggestion: { error } });
        }
      );
  });
};
