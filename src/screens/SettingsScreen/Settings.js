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
import { ThemeProvider, useTheme, Button } from "@rneui/themed";
import { signOutUser } from "../../firebase/firebaseCalls";
import { useThemeMode } from "@rneui/themed";

const Settings = () => {
  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();
  const settingsStyles = styles();
  const [isEnabled, setIsEnabled] = useState(mode == "light" ? false : true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setMode(mode == "light" ? "dark" : "light");
  };
  const windowWidth = Dimensions.get("window").width;
  {
    return (
      <SafeAreaView style={settingsStyles.mainContainer}>
        <ScrollView style={settingsStyles.contentContainer}>
          <View>
            <Text style={settingsStyles.subTitleText}>Preferences</Text>

            <TouchableOpacity>
              <Text style={settingsStyles.preferencesText}>Notification</Text>
            </TouchableOpacity>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={settingsStyles.preferencesText}>Dark Mode</Text>
              <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
                style={settingsStyles.swiches}
              />
            </View>

            {/* <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={settingsStyles.preferencesText}>
                Show Quote On Home Screen
              </Text>
              <Switch style={settingsStyles.swiches} />
            </View> */}

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
            <Button
              containerStyle={{
                marginHorizontal: 20,
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 0,
              }}
              onPress={() => {
                signOutUser();
              }}
              title="Logout"
            />

            <Image
              source={require("../../assets/Logos/Quiet_mind-clr1.png")}
              style={settingsStyles.logo}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};
export default Settings;
