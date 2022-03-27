import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import { RootStackScreenProps } from "../../types";
import style from "../styles/main"

export default function NotFoundScreen({ navigation }: RootStackScreenProps<"NotFound">) {
  return (
    <View style={style.container}>
      <Text style={style.title}>This screen doesn"t exist.</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Root")} style={style.button}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
