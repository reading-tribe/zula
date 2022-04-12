import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import theme from "../constants/Colors";
import style from "../styles/main"

const Dashboard = ({ navigation }: RootStackScreenProps<"Dashboard">) => {
  const { t } = useTranslation();

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={[style.title]}>Zula</Text>
          <Text style={[style.subtitle]}>{t("intro.subtitle")}</Text>
          <Text style={[style.description, styles.description]}>{t("intro.description")}</Text>
          <View style={style.avatarContainer} >
            <TouchableOpacity style={style.avatar} onPress={() => navigation.navigate("Books")}>
              <Text style={styles.name}>Njinga</Text>
              <Text style={styles.nickname}>Nickname</Text>
              <Text style={styles.child}>Child 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.avatar} onPress={() => navigation.navigate("Books")}>
              <Text style={styles.name}>Tarik</Text>
              <Text style={styles.nickname}>Nickname</Text>
              <Text style={styles.child}>Child 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.avatar} onPress={() => navigation.navigate("Books")}>
              <Text style={styles.name}>Ramona</Text>
              <Text style={styles.nickname}>Nickname</Text>
              <Text style={styles.child}>Child 3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Dashboard;

const styles = StyleSheet.create({
  description: {
    marginBottom: 40,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 100
  },
  nickname: {
    color: theme.white,
    fontSize: 24,
    marginBottom: 10,
  },
  child: {
    color: theme.white,
    fontSize: 18,
  }
});
