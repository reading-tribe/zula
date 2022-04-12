import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import BookCard from "./BookCard";
import style from "../styles/main"

const bookList = [
  { title: "The Adventure", subtitle: "Pablo Rio, 2010, South Africa" },
  { title: "The Adventures", subtitle: "Pablo Rio, 2010, South Africa" },
  { title: "The Adventurer", subtitle: "Pablo Rio, 2010, South Africa" },
  { title: "The Adventurers", subtitle: "Pablo Rio, 2010, South Africa" },
];

const Books = ({ navigation }: RootStackScreenProps<"Books">) => {
  const [books, setStateValues] = useState(bookList);
  const { t } = useTranslation();

  useEffect(() => {
    const effect = async () => {
      await bookList;
      setStateValues(bookList);
    };
    effect();
  }, []);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={[style.description]}>{t("intro.description")}</Text>
          <View style={[style.inputContainer]}>
            <TextInput
              style={style.input}
              placeholder="Search"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
          </View>
          <BookCard />
          <TouchableHighlight
            style={[style.button, style.whiteButton]}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}
export default Books;

const styles = StyleSheet.create({

});
