import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import style from "../styles/main"

const Profile = ({ navigation }: RootStackScreenProps<"Profile">) => {
  const { t } = useTranslation();

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

export default Profile;

const styles = StyleSheet.create({
  title: {
    marginTop: 50
  },
  subtitle: {
    marginBottom: 30,
  },
});
