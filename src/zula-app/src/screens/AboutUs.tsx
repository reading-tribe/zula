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
        <View style={style.inputContainer}>
        <Text style={[style.title]}>{t("aboutUs.title")}</Text>
        <Text style={[style.subtitle]}>{t("aboutUs.subtitle")}</Text>
        </View>
        <TouchableHighlight
          style={[style.button, style.whiteButton]}
          onPress={() => navigation.navigate("Dashboard", {
            userId: "",
            name: "",
            nickname: ""
          })}>
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
