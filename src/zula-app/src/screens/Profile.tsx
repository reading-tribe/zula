import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import theme from "../constants/Colors";
import { platform } from "../constants/Layout";
import style from "../styles/main"

const Profile = ({ navigation }: RootStackScreenProps<"Profile">) => {
  const { t } = useTranslation();

  return (
    <FullHeightScrollView >
      <View style={style.container}>
        <Text>Profile Screen</Text>
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
