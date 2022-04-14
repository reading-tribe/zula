import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { ScrollView, StyleSheet, Text, View, TouchableHighlight } from "react-native";
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
     // console.log("USER:", user) 
     // dispatch(getUser()) 
  }, []);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={[style.title]}>Zula</Text>
          <Text style={[style.subtitle]}>{t("intro.subtitle")}</Text>
          <Text style={[style.description, styles.description]}>{t("intro.description")}</Text>
          <View style={styles.buttonContainer} >
            <TouchableHighlight
              style={[style.button, style.primaryButton]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[style.button, style.secondaryButton]}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.signupText}>Create New Account</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
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
    justifyContent: "center",
    flexDirection: "column",
    width: 400,
    marginBottom: 20,
  },
  signupText: {
    color: theme.primary,
  },
});
