import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import theme from "../constants/Colors";
import { platform } from "../constants/Layout";
import style from "../styles/main"

const Profile = ({ navigation }: RootStackScreenProps<"Profile">) => {
  const { t } = useTranslation();

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={style.container}>
          <View style={styles.avatarContainer}>
            <TouchableOpacity
              style={styles.avatarImage}
              onPress={() => navigation.navigate("Books")}>
              <Text>Njinga</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.avatarImage}
              onPress={() => navigation.navigate("Books")}>
              <Text>Tarik</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.avatarImage}
              onPress={() => navigation.navigate("Books")}>
              <Text>Ramona</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Dashboard")}>
            <Text>Meet Zula</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Books")}>
            <Text>Zula Books</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Books")}>
            <Text>My bookshelf</Text>
          </TouchableOpacity>
          <TouchableHighlight
            style={[style.button, style.whiteButton]}
            onPress={() => navigation.navigate("Login")}>
            <Text>Sign Out</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
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
