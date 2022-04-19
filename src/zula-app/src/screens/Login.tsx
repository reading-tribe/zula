import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { connect, useDispatch, useSelector } from "react-redux";
import { loginUser, LoginRequest, UserState, loginUserAction } from "../redux/reducers/users"
import { RootStackScreenProps } from "../../types";
import style from "../styles/main"

const Login = ({ navigation }: RootStackScreenProps<"Login">) => {
  const [user, setUsers] = useState({ emailAddress: "", password: "" });
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const inputRef = React.createRef<TextInput>();

  const handleChange = (key: string, value: string) => {
    setUsers((prev) => ({
      ...prev,
      [key]: value,
    }))
  };

  const handleSubmit = (user: LoginRequest) => {
    dispatch(loginUser({
      emailAddress: user.emailAddress,
      password: user.password
    }))
    if (user) {
      navigation.navigate("Dashboard")
    }
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={[style.title]}>Zula</Text>
          <Text style={[style.subtitle]}>{t("intro.subtitle")}</Text>
          <Text style={[style.description]}>{t("intro.description")}</Text>
          <Text style={style.inPutlabel}>Name</Text>
          <Text style={style.inPutlabel}>Email</Text>
          <View style={style.inputContainer}>
            <TextInput
              ref={inputRef}
              style={style.input}
              placeholder="Email"
              keyboardType="email-address"
              value={user.emailAddress}
              onChangeText={(text: string) => handleChange("emailAddress", text)}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
          </View>

          <Text style={style.inPutlabel}>Password</Text>
          <View style={style.inputContainer}>
            <TextInput
              ref={inputRef}
              style={style.input}
              placeholder="Password"
              secureTextEntry={true}
              value={user.password}
              onChangeText={(text: string) => handleChange("password", text)}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
          </View>

          <View style={style.buttonContainer} >
            <TouchableOpacity
              style={styles.resetPassword}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text>Did you forget your Password?</Text>
            </TouchableOpacity>
            <TouchableHighlight
              style={[style.button, style.primaryButton]}
              onPress={() => handleSubmit(user)}
            >
              <Text>Login</Text>
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
    loginUser,
    loginUserAction
  }
)(Login);

const styles = StyleSheet.create({
  passwordField: {
    marginBottom: 20,
  },
  resetPassword: {
    flex: 1,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#A0DAB3",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 5,
  },
});
