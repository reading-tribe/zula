import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { listBooks, Book, getBooksAction } from "../redux/reducers/books"
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import { bookList, suggestedBookList } from "./bookslist"
import BookCard from "./BookCard";
import style from "../styles/main";
import theme from "../constants/Colors";

const Books = ({ route, navigation }: RootStackScreenProps<"Books">) => {
/*   console.log("BOOKS UI Route ###:", route) */
  const [newBooks, setNewBookValues] = useState(bookList);
  const [recentBooks, setRecentValues] = useState(suggestedBookList);
  const [suggestedBooks, setSuggestedValues] = useState(bookList);

  const dispatch = useDispatch()
  const book = useSelector(state => state);
  const { t } = useTranslation();

  useEffect(() => {
    setNewBookValues(bookList);
    setSuggestedValues(suggestedBookList);
    setRecentValues(bookList)
    dispatch(listBooks())
  }, [newBooks, recentBooks, suggestedBooks]);

  return (
    <FullHeightScrollView >
      <View style={style.container}>
        <Text style={[style.title]}>{t("books.title")}</Text>
        <View style={[style.inputContainer]}>
          <TextInput
            style={style.input}
            placeholder="Search"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        <BookCard navigation={navigation} newBooks={newBooks} recentBooks={recentBooks} suggestedBooks={suggestedBooks} />
        <TouchableHighlight
          style={[style.button, style.whiteButton]}
          onPress={() => navigation.goBack()}
        >
          <Text>Back</Text>
        </TouchableHighlight>
      </View>
    </FullHeightScrollView>
  );
}

export default Books;

const styles = StyleSheet.create({

});
