import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { Text, View, TouchableHighlight } from "../components/Elements";
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
