import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import theme from "../constants/Colors";
import { platform } from "../constants/Layout";
import style from "../styles/main"

const ProfileSettings = ({ navigation }: RootStackScreenProps<"ProfileSettings">) => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.title}>Profile settings</Text>
          <TouchableHighlight
            style={[style.button, style.whiteButton]}
            onPress={() => navigation.navigate("Login", {
              userId: "",
              name: "",
              nickname: ""
            })}>
            <Text>Sign Out</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileSettings;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    padding: 20,
    alignSelf: "center",
  },
  title: {
    marginTop: 50
  },
  avatarContainer: {
    display: 'flex',
    flexBasis: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarImage: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 70,
    margin: 10,
    height: 60,
    backgroundColor: theme.primary
  },
  subtitle: {
    marginBottom: 30,
  },
});
