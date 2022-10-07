import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import styles from "./SettingsStyles";
import { ThemeProvider, useTheme } from "@rneui/themed";

const Settings = () =>{
  const { theme } = useTheme();
  const settingsStyles = styles(); 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const windowWidth = Dimensions.get("window").width;{
  return (
    <SafeAreaView style={settingsStyles.mainContainer}>
      <ScrollView style={settingsStyles.contentContainer}>
        <View>

          <Text style={settingsStyles.titleText}>Settings</Text>
          <Text style={settingsStyles.subTitleText}>Preferences</Text>
          <Text style={settingsStyles.preferencesText}>Notification</Text>
          <View style={{ flex: 1, flexDirection: "row" }} >
            <Text style={settingsStyles.preferencesText}>Dark Mode</Text>
            <Switch style={settingsStyles.swiches}/>
          </View>
          <View style={{flex: 1, flexDirection: "row"}} >
            <Text style={settingsStyles.preferencesText}>Show Quote On Home Screen</Text>
            <Switch style={settingsStyles.swiches}/>
          </View>
          <Text style={settingsStyles.subTitleText}>Support</Text>
          <Text style={settingsStyles.preferencesText}>Contact Us</Text>
          <Text style={settingsStyles.preferencesText}>Help and FAQs</Text>
          <Text style={settingsStyles.subTitleText}>Legal</Text>
          <Text style={settingsStyles.preferencesText}>Privacy Policy</Text>
          <Text style={settingsStyles.preferencesText}>Terms Of Use</Text>
          <Text
              style={[
                settingsStyles.subTitleText,
                { textAlign: "center", paddingVertical: 20, marginTop: 150 },
              ]}>
              Logout
            </Text>
            <Text
              style={[
                settingsStyles.titleText,
                { textAlign: "center", paddingVertical: 20 },
              ]}>
              LOGO
            </Text>

        </View>
    </ScrollView>
  </SafeAreaView>
  );
};

};
export default Settings;
