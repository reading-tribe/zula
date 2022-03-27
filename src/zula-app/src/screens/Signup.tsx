import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import theme from "../constants/Colors";
import style from "../styles/main"

const Signup = ({ navigation }: RootStackScreenProps<"Signup">) => {
  const { t } = useTranslation()

  return (
    <View style={style.container}>
      <Text style={[style.title]}>Zula</Text>
      <Text style={[style.subtitle]}>{t("subtitle")}</Text>
      <Text style={[style.description]}>{t("description")}</Text>
      <Text style={style.inPutlabel}>Name</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Name"
          keyboardType="default"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <Text style={style.inPutlabel}>Email</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <Text style={style.inPutlabel}>Password</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer} >
        <TouchableHighlight
          style={style.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Back to login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[style.button, styles.signupButton]}
          onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.loginText}>Done</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default Signup;

const styles = StyleSheet.create({
  label: {
    textAlign: "left",
    justifyContent: "flex-start",
    color: theme.white,
    marginBottom: 5,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  signupButton: {
    flex: 1,
    backgroundColor: theme.primary
  },
  loginText: {
    color: theme.secondary,
  }
});
