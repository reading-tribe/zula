import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { ScrollView, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import theme from "../constants/Colors";
import style from "../styles/main"
import { getUser, UserState, getUserAction } from "../redux/reducers/users"

const AboutUs = ({ navigation }: RootStackScreenProps<"AboutUs">) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state);
  const { t } = useTranslation();

  useEffect(() => {
    // console.log("USER:", user) 
    // dispatch(getUser()) 
  }, []);

  return (
    <FullHeightScrollView>
      <View style={style.container}>
        <Text style={[style.title]}>About Zula</Text>
        <Text style={[style.subtitle]}>{t("intro.subtitle")}</Text>
        <TouchableHighlight
          style={[style.button, style.whiteButton]}
          onPress={() => navigation.navigate("Dashboard")}>
          <Text>back</Text>
        </TouchableHighlight>
      </View>
    </FullHeightScrollView>
  );
}

export default AboutUs;

const styles = StyleSheet.create({
  title: {
    marginTop: 30
  },
  subtitle: {
    marginBottom: 30,
  },
  description: {
    marginBottom: 100,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: 400,
    marginBottom: 20,
  },
  signupText: {
    color: theme.primary,
  },
});
