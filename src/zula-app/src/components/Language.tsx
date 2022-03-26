import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Text, View, TouchableHighlight } from "../components/Elements";
import { RootStackScreenProps } from "../../types";
import style from "../components/styles/main"

const Language = ({ navigation }: RootStackScreenProps<"Language">) => {
  const [language, setLanguage] = useState("de");
  const { t, i18n } = useTranslation();


  const handleChangeLanguage = () => {
    if (language == "de") {
      setLanguage("en")
    } 
    if (language == "en") {
      setLanguage("fr")
    }
    if (language == "fr") {
      setLanguage("de")
    }
    i18n.changeLanguage(language)
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={[style.title, styles.title]}>Zula</Text>
        <Text style={[style.subtitle]}>{t("subtitle")}</Text>
        <TouchableHighlight
          style={style.button}
          onPress={() => navigation.navigate("Home")}>
          <Text>Sign Out</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

export default Language;



const styles = StyleSheet.create({
  title: {
    marginTop: 50
  },
  subtitle: {
    marginBottom: 30,
  },
});
