import React, { useState } from "react";
import { View, Text, Alert, Pressable } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { Color } from "../../../GlobalStyles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      Alert.alert("Login Successful", `Welcome, ${email}!`);
    } else {
      Alert.alert("Login Failed", "Please enter both email and password.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      Alert.alert("Google Login Successful", `Welcome, ${userInfo.user.name}!`);
    } catch (error) {
      Alert.alert("Google Login Failed", error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);
      if (result.isCancelled) {
        Alert.alert("Login Cancelled");
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        Alert.alert(
          "Facebook Login Successful",
          `Access Token: ${data.accessToken}`
        );
      }
    } catch (error) {
      Alert.alert("Facebook Login Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Color.colorLightslategray}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        placeholderTextColor={Color.colorLightslategray}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <View style={styles.socialButtons}>
        <Pressable style={styles.button}  onPress={handleGoogleLogin}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </Pressable>
        <Pressable style={styles.button}  onPress={handleFacebookLogin}>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
