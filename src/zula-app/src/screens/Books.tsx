import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import theme from "../constants/Colors";
import Card from "../components/Card"
import style from "../styles/main"

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
        style={[style.button]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Back</Text>
      </TouchableHighlight>
    </View>
  );
}
export default Books;

const styles = StyleSheet.create({
  
});
