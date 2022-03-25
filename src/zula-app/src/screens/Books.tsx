import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { Text, View } from "../components/styles/Themed";
import theme from "../constants/Colors";
import Card from "../components/Card"
import style from "../components/styles/main"

const Books = ({ navigation }: RootStackScreenProps<"Books">) => {
  const { t } = useTranslation();

  return (
    <View style={style.container}>
      <Text style={[style.title]}>Zula</Text>
      <Text
        style={[style.subtitle]}
      >{t("subtitle")}</Text>
        <Card />
      <TouchableHighlight
        style={[style.button, styles.loginButton]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Back</Text>
      </TouchableHighlight>
    </View>
  );
}
export default Books;

const styles = StyleSheet.create({
  container:{
    backgroundColor: "pink",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
  title: {
    marginTop: 30
  },
  subtitle: {
    marginBottom: 30,
  },
  cardContainer: {
    marginBottom: 20,
  },
  signupButton: {
    width: 200,
    backgroundColor: theme.secondary,
  },
  loginButton: {
    width: 200,
    backgroundColor: theme.primary,
    marginBottom: 10,
  },
  signupText: {
    color: theme.primary,
  },
});
