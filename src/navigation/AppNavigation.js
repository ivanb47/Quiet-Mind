import { View, Text, Platform } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "@rneui/themed";
import { useTheme } from "@rneui/themed";
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
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitle: "Login",
        }}
      />
      <LoginStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitle: "Sign Up",
        }}
      />
    </LoginStack.Navigator>
  );
};
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTransparent: Platform.OS == "ios" ? true : false,
        headerLargeTitle: true,
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
          headerTitle: "Music",
        }}
      />
    </HomeStack.Navigator>
  );
};
const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          headerLargeTitle: true,
          // headerShown: false,
        }}
      />
    </SettingStack.Navigator>
  );
};

const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
    </ChatStack.Navigator>
  );
};

const AppNavigation = () => {
  const { theme } = useTheme();
  const [user, setUser] = React.useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in");
      setUser(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      console.log("User is signed out");
      setUser(null);
      // User is signed out
      // ...
    }
  });
  return (
    <NavigationContainer>
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
                    name="chatbox"
                    size={size}
                    color={theme.colors.primary}
                  />
                ) : (
                  <Ionicons name="chatbox-outline" size={size} color={color} />
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
