import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  View,
  Switch,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./settingsStyles";
import { ThemeProvider, useTheme } from "@rneui/themed";
import advices from "../../Data/advices";

const Settings = () => {
  const { theme } = useTheme();
  const settingsStyles = styles();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const windowWidth = Dimensions.get("window").width;{
  return (
    <SafeAreaView style={settingsStyles.mainContainer}>
      <ScrollView style={settingsStyles.contentContainer}>
        <View>
          <Text style={settingsStyles.subTitleText}>Preferences</Text>
          
          <TouchableOpacity>
            <Text style={settingsStyles.preferencesText}>Notification</Text>
          </TouchableOpacity>

          <View style={{ flex: 1, flexDirection: "row" }} >
            <Text style={settingsStyles.preferencesText}>Dark Mode</Text>
            <Switch style={settingsStyles.swiches}/>
          </View>

          <View style={{flex: 1, flexDirection: "row"}} >
            <Text style={settingsStyles.preferencesText}>Show Quote On Home Screen</Text>
            <Switch style={settingsStyles.swiches}/>
          </View>

          <Text style={settingsStyles.subTitleText}>Support</Text>

          <TouchableOpacity>
            <Text style={settingsStyles.preferencesText}>Contact Us</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={settingsStyles.preferencesText}>Help and FAQs</Text>
          </TouchableOpacity>

          <Text style={settingsStyles.subTitleText}>Legal</Text>

          <TouchableOpacity>
            <Text style={settingsStyles.preferencesText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={settingsStyles.preferencesText}>Terms Of Use</Text>
          </TouchableOpacity>

          {/* Currently we are not authenticating users so currently we don't need logout button */}
          {/* <Text
              style={[
                settingsStyles.subTitleText,
                { textAlign: "center", paddingVertical: 20, marginTop: 150 },
              ]}
            >
              Logout
            </Text> */}

            <Text
              style={[
                settingsStyles.titleText,
                { textAlign: "center", paddingVertical: 20 },
              ]}
            >
              LOGO
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};
export default Settings;
