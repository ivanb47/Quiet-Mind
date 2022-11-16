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
import SignUpStyle from "./signupStyles";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [fullName, setFullName] = useState("");
  const styles = SignUpStyle();
  return (
    <View style={styles.container}>
      <Image style={styles.quoteImage} source={require("../../assets/images/Yoga_exe.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#808080"
          onChangeText={(email) => setFullName(fullName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#808080"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      {/* <View style={styles.DescriptionInputView}>
        <TextInput
          style={styles.DescriptionTextInput}
          placeholder="Describe why you want to be volunteer"
          placeholderTextColor="#808080"
          multiline true
          onChangeText={(email) => setDescription(description)}
        />
      </View> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
     
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.account}>
        <TouchableOpacity>
          <Text>
             Already have an account?
            <Text style={styles.sign_up}> Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

export default SignUp;
