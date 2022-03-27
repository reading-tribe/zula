import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View , TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import theme from "../constants/Colors";
import style from "../styles/main"
import { getUser, UserState, getUserAction } from "../redux/reducers/users"

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state);
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
          style={[style.button, {backgroundColor: theme.primary}]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[style.button, {backgroundColor: theme.secondary}]}
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
  signupText: {
    color: theme.primary,
  },
});
