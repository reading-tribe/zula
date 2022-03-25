import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { StyleSheet, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { Text, View } from "../components/styles/Themed";
import theme from "../constants/Colors";
import style from "../components/styles/main"
import { getUser, UserState, getUserAction } from "../redux/reducers/users"

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  const dispatch = useDispatch()
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <View style={style.container}>
      <Text style={[style.title]}>Zula</Text>
      <Text
        style={[style.subtitle]}
      >{t("subtitle")}</Text>
      <Text style={[style.description, styles.description]}>{t("description")}</Text>
      <View style={styles.buttonContainer} >
        <TouchableHighlight
          style={[style.button, styles.loginButton]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[style.button, styles.signupButton]}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signupText}>Create New Account</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default connect(
  state => ({
    user: state
  }),
  {
    getUser,
    getUserAction
  }
)(Home);


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
    flexDirection: "column",
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
