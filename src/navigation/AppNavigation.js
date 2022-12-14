import { View, Text, Platform } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, useThemeMode } from "@rneui/themed";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
// Imports for navigation handling
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import for screens
import HomeScreen from "../screens/HomeScreen/Home";
import LoginScreen from "../screens/LoginScreen/Login";
import SignUpScreen from "../screens/SignUpScreen/SignUp";
import SettingsScreen from "../screens/SettingsScreen/Settings";
import ChatScreen from "../screens/ChatScreen/Chat";
import ExerciseListScreen from "../screens/ExerciseListScreen/ExerciseList";
import MusicListScreen from "../screens/MusicListScreen/MusicList";
import CardsListScreen from "../screens/CardsListScreen/CardsList";
import TermsScreen from "../screens/TermsScreen/TermsScreen";
// library used for caching
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

// navigation stack initialization for screens
const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();

// Initialize bottom tab navigation
const Tab = createBottomTabNavigator();

//Firebase
import { auth, onAuthStateChanged } from "../firebase/firebase-config";

const LoginStackScreen = () => {
  const { theme } = useTheme();
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitle: "Login",
          headerTintColor: theme.colors.black,
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <LoginStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitle: "Sign Up",
          headerTintColor: theme.colors.black,
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
    </LoginStack.Navigator>
  );
};
const HomeStackScreen = () => {
  const { theme } = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTransparent: Platform.OS == "ios" ? true : false,
        headerLargeTitle: true,
        headerTintColor: theme.colors.black,
        headerStyle: {
          backgroundColor: theme.colors.white,
        },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="CardsList"
        component={CardsListScreen}
        options={{
          headerTitle: "Cards",
        }}
      />
      <HomeStack.Screen
        name="ExerciseList"
        component={ExerciseListScreen}
        options={{
          headerTitle: "Exercises",
        }}
      />
      <HomeStack.Screen
        name="MusicList"
        component={MusicListScreen}
        options={{
          headerTitle: "Soothing sounds",
        }}
      />
    </HomeStack.Navigator>
  );
};
const SettingStackScreen = () => {
  const { theme } = useTheme();
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          headerLargeTitle: true,
          headerTintColor: theme.colors.black,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      />
      <SettingStack.Screen
        name="TermsScreen"
        component={TermsScreen}
        options={{
          headerTitle: "Terms",
          // headerLargeTitle: true,
          headerTintColor: theme.colors.black,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      />
    </SettingStack.Navigator>
  );
};
const ChatStackScreen = () => {
  const { theme } = useTheme();
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Favorites"
        options={{
          headerTitle: "Favorites",
          headerLargeTitle: true,
          headerTintColor: theme.colors.black,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
        component={ChatScreen}
      />
    </ChatStack.Navigator>
  );
};

const AppNavigation = () => {
  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();
  const [user, setUser] = React.useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      SplashScreen.hideAsync();
    } else {
      setUser(null);
      SplashScreen.hideAsync();
    }
  });

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
      const display_mode = await cache.get("display_mode");
      console.log("display_mode", display_mode);
      setMode(display_mode);
    }
    fetchCache();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar style={mode == "dark" ? "light" : "dark"} />
      {user == null ? (
        <LoginStackScreen />
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.colors.background,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <Ionicons
                    name="home"
                    size={size}
                    color={theme.colors.primary}
                  />
                ) : (
                  <Ionicons name="home-outline" size={size} color={color} />
                ),
            }}
            component={HomeStackScreen}
          />
          <Tab.Screen
            name="Chat"
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <Ionicons
                    name="heart"
                    size={size}
                    color={theme.colors.primary}
                  />
                ) : (
                  <Ionicons name="heart-outline" size={size} color={color} />
                ),
            }}
            component={ChatStackScreen}
          />
          <Tab.Screen
            name="Settings"
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <Ionicons
                    name="settings"
                    size={size}
                    color={theme.colors.primary}
                  />
                ) : (
                  <Ionicons name="settings-outline" size={size} color={color} />
                ),
            }}
            component={SettingStackScreen}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
