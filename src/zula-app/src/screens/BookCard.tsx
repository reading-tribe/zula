import React, { useState, useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTranslation } from "react-i18next";
import { Appbar } from 'react-native-paper';
import theme from "../constants/Colors";
import style from "../styles/main"

const bookList = [
  { 
  title: "The Adventure", 
  subtitle: "Pablo Rio, 2010, South Africa"
 },
  { 
  title: "The Adventures", 
  subtitle: "Pablo Rio, 2010, South Africa"
 },
];

const suggestedBookList = [
  { 
  title: "The Adventure", 
  subtitle: "Pablo Rio, 2010, South Africa"
 },
  { 
  title: "The Adventures", 
  subtitle: "Pablo Rio, 2010, South Africa"
 },
 { 
  title: "The Adventurer", 
  subtitle: "Pablo Rio, 2010, South Africa"
 },
  { 
  title: "The Adventurers", 
  subtitle: "Pablo Rio, 2010, South Africa"
 },
];

export interface BookProps {
  book: object;
}

export const Book = () => {
  const [books, setStateValues] = useState(bookList);
  const [recentBooks, setRecentValues] = useState(bookList);
  const [suggestedBooks, setSuggestedValues] = useState(suggestedBookList);
  const { t } = useTranslation();

  useEffect(() => {
    const effect = async () => {
      await bookList;
      setStateValues(bookList);
      setSuggestedValues(suggestedBookList);
      setRecentValues(bookList)
    };
    effect();
  }, []);

  return (
    <View>
      <View style={[style.container, styles.book]}>
        <Text style={styles.title}>New Books in Zula</Text>
        {books.map((bookItem, index) => (
          <View key={bookItem.title} style={styles.bookCard}>
            <View style={styles.bookImage}></View>
            <View style={styles.description}>
              <Text >
                {bookItem.title}
              </Text>
              <Text >
                {bookItem.subtitle}
              </Text>
            </View>
          </View>
        )
        )}
      </View>
      <View style={[style.container, styles.recentBook]}>
          <Text style={styles.title}>My Recent Readings</Text>
        {recentBooks.map((recentBook, index) => (
          <View key={recentBook.title} style={styles.bookCard}>
            <View style={styles.bookImage}></View>
            <View style={styles.description}>
              <Text >
                {recentBook.title}
              </Text>
              <Text >
                {recentBook.subtitle}
              </Text>
            </View>
          </View>
        )
        )}
      </View>
      <View style={[style.container, styles.suggestedBook]}>
          <Text style={styles.title}>Zula Made Some Suggestions Based On YOur Reading</Text>
        {suggestedBooks.map((book, index) => (
          <View key={book.title} style={styles.bookCard}>
            <View style={styles.bookImage}></View>
            <View style={styles.description}>
              <Text >
                {book.title}
              </Text>
              <Text >
                {book.subtitle}
              </Text>
            </View>
          </View>
        )
        )}
      </View>
    </View>
  )
}

export default Book;

const styles = StyleSheet.create({
  book: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#E7F6EC",
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold"
  },
  recentBook: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: theme.white,
  },
  suggestedBook: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#E7F6EC",
  },
  bookCard: {
    display: 'flex',
    flexBasis: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  bookImage: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: 60,
    height: 60,
    backgroundColor: theme.secondary
  },
  description: {
    padding: 20,
    display: 'flex',
    justifyContent: 'flex-end',
  }
});
