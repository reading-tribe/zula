import React, { useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import theme from "../constants/Colors";
import { platform } from "../constants/Layout";
import style from "../styles/main"

const Profile = ({ route, navigation }: RootStackScreenProps<"Profile">) => {
  const { t } = useTranslation();
  const name = route.params?.name;
  const nickname = route.params?.nickname

  return (
    <FullHeightScrollView >
      <View style={style.container}>
        <Text style={[style.subtitle]}>Edit {name} {nickname}</Text>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder={name}
            keyboardType="default"
            placeholderTextColor={theme.primary}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TextInput
            style={style.input}
            placeholder={nickname}
            secureTextEntry={true}
            placeholderTextColor={theme.primary}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        <View style={style.buttonContainer}>
          <TouchableHighlight
            style={[style.button, style.primaryButton]}
            onPress={() => navigation.navigate("Books", {
              userId: "",
              name: "",
              nickname: ""
            })}
          >
            <Text>Save</Text>
          </TouchableHighlight>
        </View>
      </View>
    </FullHeightScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    padding: 20,
    alignSelf: "center",
  },
  title: {
    marginTop: 50
  },
  avatarContainer: {
    display: 'flex',
    flexBasis: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarImage: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 70,
    margin: 10,
    height: 60,
    backgroundColor: theme.primary
  },
  subtitle: {
    marginBottom: 30,
  },
});
