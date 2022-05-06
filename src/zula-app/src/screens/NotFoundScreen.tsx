import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import style from "../styles/main"

export default function NotFoundScreen({ navigation }: RootStackScreenProps<"NotFound">) {
  const { t } = useTranslation();
  return (
    <View style={style.container}>
      <Text style={style.title}>{t("notFound.title")}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Root")} style={style.button}>
        <Text>{t("notFound.subtitle")}</Text>
      </TouchableOpacity>
    </View>
  );
}
