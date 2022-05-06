import React, { useState, useEffect, createRef } from "react";
import { ScrollView, StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { createUser, RegisterRequest, createUserAction } from "../redux/reducers/users"
import theme from "../constants/Colors";
import style from "../styles/main"

const Signup = ({ navigation }: RootStackScreenProps<"Signup">) => {
  const users = useSelector(state => state);
  const [user, setUsers] = useState({ emailAddress: "", password: "" });
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const inputRef = createRef<TextInput>();

  const handleChange = (key: string, value: string) => {
    setUsers((prev) => ({
      ...prev,
      [key]: value,
    }))
  };

  const handleSubmit = (user: RegisterRequest) => {
    dispatch(createUser({
      emailAddress: user.emailAddress,
      password: user.password
    }))
    if (user) {
      navigation.navigate("Dashboard")
    }
  };

  /* useEffect(() => {
      dispatch(createUser(user))
    }, [dispatch]) */

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={[style.container]}>
        <View style={style.inputContainer}>
          <Text style={[style.title]}>{t("signup.title")}</Text>
          {/*  <Text style={style.inPutlabel}>Email</Text> */}
          <TextInput
            ref={inputRef}
            style={style.input}
            placeholder="Email"
            keyboardType="email-address"
            value={user.emailAddress}
            placeholderTextColor={theme.primary}
            onChangeText={(text: string) => handleChange("emailAddress", text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TextInput
            ref={inputRef}
            style={style.input}
            placeholder="Password"
            secureTextEntry={true}
            value={user.password}
            placeholderTextColor={theme.primary}
            onChangeText={(text: string) => handleChange("password", text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <View style={style.buttonContainer} >
            <TouchableOpacity
              style={[style.button, style.primaryButton]}
              onPress={() => handleSubmit(user)}>
              <Text style={styles.loginText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.subtitle, { marginTop: 10 }]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text>Back to login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[style.bottomView]} >
          <TouchableOpacity onPress={() => navigation.navigate("Books")}>
            <Text style={[style.textBottom]}>Enter As Guest</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
export default Signup;

const styles = StyleSheet.create({
  label: {
    textAlign: "left",
    justifyContent: "flex-start",
    color: theme.white,
    marginBottom: 5,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  loginText: {
    color: theme.secondary,
  }
});
