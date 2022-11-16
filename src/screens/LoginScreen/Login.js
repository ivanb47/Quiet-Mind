import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Loginstyle from "./loginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const styles = Loginstyle();
  return (
    <View style={styles.container}>
      <Image
        style={styles.quoteImage}
        source={require("../../assets/images/Yoga_exe.png")}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#808080"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.account}>
        <TouchableOpacity>
          <Text>
            Don't have an account?
            <Text style={styles.sign_up}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
