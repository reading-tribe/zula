import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from 'react-native-paper';
import { RootStackScreenProps } from "../../types";
import theme from "../constants/Colors";
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import style from "../styles/main";
import '../styles/index.scss';
import { getUser, UserState, getUserAction } from "../redux/reducers/users"

const userData = {
  id: 1,
  name: "your name"
}

const Home = ({ route, navigation }: RootStackScreenProps<"Home">) => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch()
  const user = useSelector(state => state);
  const { t } = useTranslation();
  const { colors } = useTheme();

  useEffect(() => {
    /* console.log("USER:", users) */
    setUsers(userData)
    /* if (userData){
        navigation.navigate("Dashboard", userData)
      } */
  }, []);

  return (
    <FullHeightScrollView >
      <View style={[style.container, {justifyContent: "space-around"}]}>
        <Text style={[style.title]}>{t("home.title")}</Text>
        <View style={[styles.buttonContainer]} >
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
    </FullHeightScrollView>
  );
}
export default Home;

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
    width: "100%",
    marginBottom: 20,
  },
  signupText: {
    color: theme.primary,
  },
});
