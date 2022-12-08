import { WebView } from "react-native-webview";
import React from "react";
import PolicyHTML from "./terms.html";
const TermsScreen = () => {
  return <WebView source={PolicyHTML} style={{ flex: 1 }} />;
};

export default TermsScreen;
