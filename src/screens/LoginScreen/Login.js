import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Loginstyle from "./loginStyles";
import { signIn } from "../../firebase/firebaseCalls";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState("");
  const styles = Loginstyle();
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

          <TouchableOpacity
            onPress={() => signIn(email, password, setLoader)}
            style={styles.loginBtn}
          >
            {!loader ? (
              <Text style={styles.loginText}>Login</Text>
            ) : (
              <ActivityIndicator size={"small"} />
            )}
          </TouchableOpacity>
          <View style={styles.account}>
            <Text style={styles.text}>
              Don't have an account?
              <Text
                style={styles.sign_up}
                onPress={() => {
                  props.navigation.navigate("SignUpScreen");
                }}
              >
                {" "}
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
