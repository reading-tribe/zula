import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, Text, View, TouchableHighlight } from "react-native";
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
  const inputRef = React.createRef<TextInput>();

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

  /*   useEffect(() => {
      dispatch(createUser(user))
    }, [dispatch]) */

  return (
    <View style={style.container}>
      <Text style={[style.title]}>Zula</Text>
      <Text style={[style.subtitle]}>{t("intro.subtitle")}</Text>
      <Text style={[style.description]}>{t("intro.description")}</Text>

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

      <View style={styles.buttonContainer} >
        <TouchableHighlight
          style={style.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Back to login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[style.button, styles.signupButton]}
          onPress={() => handleSubmit(user)}>
          <Text style={styles.loginText}>Done</Text>
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
    createUser,
    createUserAction
  }
)(Signup);

const styles = StyleSheet.create({
  label: {
    textAlign: "left",
    justifyContent: "flex-start",
    color: theme.white,
    marginBottom: 5,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  signupButton: {
    flex: 1,
    backgroundColor: theme.primary
  },
  loginText: {
    color: theme.secondary,
  }
});
