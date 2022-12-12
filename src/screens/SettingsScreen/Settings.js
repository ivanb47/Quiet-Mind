import {
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  View,
  Switch,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./settingsStyles";
import { ThemeProvider, useTheme, Button } from "@rneui/themed";
import { signOutUser } from "../../firebase/firebaseCalls";
import { useThemeMode } from "@rneui/themed";
// library used for caching
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = (props) => {
  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();
  const settingsStyles = styles();
  const [isEnabled, setIsEnabled] = useState(mode == "light" ? false : true);

  const cache = new Cache({
    namespace: "QUEST_MIND",
    policy: {
      maxEntries: 50, // if unspecified, it can have unlimited entries
      stdTTL: 0, // the standard ttl as number in seconds, default: 0 (unlimited)
    },
    backend: AsyncStorage,
  });

  useEffect(() => {
    async function fetchCache() {
      const displayMode = await cache.get("display_mode");
      if (displayMode) {
        setMode(displayMode);
        setIsEnabled(displayMode == "light" ? false : true);
      }
    }
    fetchCache();
  }, []);

  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    const newMode = mode == "light" ? "dark" : "light";
    setMode(newMode);
    await cache.set("display_mode", newMode);
  };

  {
    return (
      <SafeAreaView style={settingsStyles.mainContainer}>
        <ScrollView style={settingsStyles.contentContainer}>
          <View>
            <Text style={settingsStyles.subTitleText}>Preferences</Text>

            {/* <TouchableOpacity>
              <Text style={settingsStyles.preferencesText}>Notification</Text>
            </TouchableOpacity> */}

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

            <TouchableOpacity
              onPress={() => Linking.openURL("mailto:udayskhatri@gmail.com")}
            >
              <Text style={settingsStyles.preferencesText}>Contact Us</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
              <Text style={settingsStyles.preferencesText}>Help and FAQs</Text>
            </TouchableOpacity> */}

            <Text style={settingsStyles.subTitleText}>Legal</Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate("TermsScreen")}
            >
              <Text style={settingsStyles.preferencesText}>Terms</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
              <Text style={settingsStyles.preferencesText}>Terms Of Use</Text>
            </TouchableOpacity> */}

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
              titleStyle={{ color: theme.colors.white }}
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
