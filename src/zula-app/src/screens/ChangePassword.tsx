import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal, Portal } from 'react-native-paper';
import { loginUser, LoginRequest, UserState, loginUserAction } from "../redux/reducers/users"
import { RootStackScreenProps } from "../../types";
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import ResetPasswordRequest from "../components/ResetPasswordRequest";
import style from "../styles/main";
import theme from "../constants/Colors";

const ChangePassword = ({ navigation }: RootStackScreenProps<"ChangePassword">) => {
  const [user, setUsers] = useState({ emailAddress: "" });
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const inputRef = React.createRef<TextInput>();

  const handleChange = (key: string, value: string) => {
    setUsers((prev) => ({
      ...prev,
      [key]: value,
    }))
  };

  const showModal = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (user: LoginRequest) => {
    dispatch(loginUser({
      emailAddress: user.emailAddress,
      password: user.password
    }))
  };

  return (
    <FullHeightScrollView >
      <View style={style.container}>
        <View style={style.inputContainer}>
          <Text style={[style.title]}>{t("changePassword.title")}</Text>
          {/*    <Text style={style.inPutlabel}>Email</Text> */}
          <TextInput
            ref={inputRef}
            style={style.input}
            placeholder="Enter email"
            keyboardType="email-address"
            value={user.emailAddress}
            onChangeText={(text: string) => handleChange("emailAddress", text)}
            placeholderTextColor={theme.primary}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <View style={style.buttonContainer} >
            <TouchableHighlight
              style={[style.button, style.primaryButton]}
              onPress={showModal}
            >
              <Text>Next</Text>
            </TouchableHighlight>
          </View>
        </View>



        <Portal>
          <Modal visible={isOpen} onDismiss={showModal}>
            <ResetPasswordRequest navigation={navigation} isOpen={isOpen} showModal={showModal} />
          </Modal>
        </Portal>
      </View>
    </FullHeightScrollView>
  );
}
export default ChangePassword;

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
