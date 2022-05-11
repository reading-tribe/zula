import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import theme from "../constants/Colors";
import { platform } from "../constants/Layout";
import style from "../styles/main"

const Menu = ({ navigation }: RootStackScreenProps<"Menu">) => {
  const { t } = useTranslation();

  return (
    <FullHeightScrollView >
      <View style={style.container}>
        <View style={style.avatarContainer}>
          <TouchableOpacity
            style={styles.avatarImage}
            onPress={() => navigation.navigate("Books", {
              userId: "",
              name: "",
              nickname: ""
            })}>
            <Text>Njinga</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.avatarImage}
            onPress={() => navigation.navigate("Books", {
              userId: "",
              name: "",
              nickname: ""
            })}>
            <Text>Tarik</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.avatarImage}
            onPress={() => navigation.navigate("Books", {
              userId: "",
              name: "",
              nickname: ""
            })}>
            <Text>Ramona</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Root")}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AboutUs")}>
          <Text>Meet Zula</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BookList", {
            userId: "",
            name: "",
            nickname: ""
          })}>
          <Text>Zula Books</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BookList", {
            userId: "",
            name: "",
            nickname: ""
          })}>
          <Text>My bookshelf</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, style.primaryButton]}
          onPress={() => navigation.navigate("ProfileSettings", {
            userId: "",
            name: "",
            nickname: ""
          })}>
          <Text>Profile Settings</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={[style.button, style.whiteButton]}
          onPress={() => navigation.navigate("Login", {
            userId: "",
            name: "",
            nickname: ""
          })}>
          <Text>Sign Out</Text>
        </TouchableHighlight>
      </View>
    </FullHeightScrollView>
  );
}

export default Menu;

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
