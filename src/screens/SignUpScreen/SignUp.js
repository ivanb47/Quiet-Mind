import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import SignUpStyle from "./signupStyles";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [fullName, setFullName] = useState("");
  const styles = SignUpStyle();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            style={styles.logoStyle}
            source={require("../../assets/Logos/Quiet_mind-clr1.png")}
          />

          <StatusBar style="auto" />

          <TextInput
            style={styles.inputView}
            placeholder="Full Name"
            placeholderTextColor="#808080"
            onChangeText={(email) => setFullName(fullName)}
          />

          <TextInput
            style={styles.inputView}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#808080"
            onChangeText={(email) => setEmail(email)}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Password"
            placeholderTextColor="#808080"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.account}>
            <Text>
              Already have an account?
              <Text
                style={styles.sign_up}
                onPress={() => {
                  props.navigation.navigate("LoginScreen");
                }}
              >
                {" "}
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
