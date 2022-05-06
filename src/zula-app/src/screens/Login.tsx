import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { connect, useDispatch, useSelector } from "react-redux";
import { loginUser, LoginRequest, UserState, loginUserAction } from "../redux/reducers/users"
import { RootStackScreenProps } from "../../types";
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import theme from "../constants/Colors";
import style from "../styles/main"

const Login = ({route, navigation }: RootStackScreenProps<"Login">) => {
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
      navigation.navigate("Dashboard", {
        userId: "12345",
        name: user.emailAddress,
        nickname: user.password
      })
    }
  };

  return (
    <FullHeightScrollView >
      <View style={style.container}>
        <View style={style.inputContainer}>
          {/*   <Text style={style.inPutlabel}>Email</Text> */}
        <Text style={[style.title]}>{t("login.title")}</Text>
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

          <View style={style.buttonContainer}>
            <TouchableOpacity
              style={[style.button, style.primaryButton]}
              onPress={() => handleSubmit(user)}
            >
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.subtitle, styles.resetPassword]}
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <Text>{t("changePassword.title")}</Text>
            </TouchableOpacity>
          </View>
        </View>

          <View style={[style.bottomView]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={[style.textBottom]}>Don't have an account? Register</Text>
            </TouchableOpacity>
          </View>
        </View>

    </FullHeightScrollView>
  );
}
export default Login;

const styles = StyleSheet.create({
  passwordField: {
    marginBottom: 20,
  },
  resetPassword: {
    marginTop: 5,
  },
});
