import React, { useState, useEffect, createRef } from "react";
import { ScrollView, StyleSheet, TextInput, Text, View, TouchableHighlight } from "react-native";
import theme from "../constants/Colors";
import style from "../styles/main"

const ResetPasswordRequest = (props) => {
  const navigation = props.navigation
  const isOpen = props.navigation
  const showModal = props.showModal
  const [code, setCode] = useState("")

  const resetPassword = () => {
    if (isOpen) {
      navigation.navigate("Books")
    }
  }

  const handleChange = (value: string) => {
    setCode(value)
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={[style.container, { backgroundColor: theme.white }]}>
        <View style={style.inputContainer}>
          <Text style={[style.title]}>Please Check Your email</Text>
          <Text style={style.subtitle}>We have sent you verification code to your email. Enter the code to verify.</Text>
          <View style={style.inputContainer}>
            <TextInput
              style={[style.input]}
              placeholder="Verification code"
              value={code}
              placeholderTextColor={theme.primary}
              onChangeText={(text: string) => handleChange(text)}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
          </View>
          <View style={style.buttonContainer} >
            <TouchableHighlight
              style={[style.button, style.whiteButton]}
              onPress={showModal}>
              <Text style={styles.loginText}>Verify</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ResetPasswordRequest;

const styles = StyleSheet.create({
  label: {
    textAlign: "left",
    justifyContent: "flex-start",
    color: theme.white,
    marginBottom: 5,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  loginText: {
    color: theme.secondary,
  }
});
