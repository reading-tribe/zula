import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTranslation } from "react-i18next";
import style from "../styles/main"
import theme from "../constants/Colors";

export const Book = (props) => {
  const { newBooks, recentBooks, suggestedBooks, navigation } = props

  const { t } = useTranslation();

  return (
    <View style={[style.container]}>
      <View style={[styles.newBook]}>
        <Text style={styles.title}>New Books in Zula</Text>
        {newBooks.map((newBook, index) => (
          <TouchableOpacity key={newBook.id} onPress={() => navigation.navigate("BookList")} style={styles.bookCard}>
            <View style={styles.bookImage}></View>
            <View style={styles.description}>
              <Text >
                {newBook.internal_title}
              </Text>
              <Text >
                {newBook.authors}
              </Text>
            </View>
          </TouchableOpacity >
        ))}
      </View>

      <View style={[styles.recentBook]}>
        <Text style={styles.title}>My Recent Readings</Text>
        {recentBooks.map((recentBook, index) => (
          < TouchableOpacity key={recentBook.id} onPress={() => navigation.navigate("BookList")} style={styles.bookCard}>
            <View style={styles.bookImage}></View>
            <View style={styles.description}>
              <Text >
                {recentBook.internal_title}
              </Text>
              <Text >
                {recentBook.authors}
              </Text>
            </View>
          </TouchableOpacity >
        ))}
      </View>

      <View style={[styles.suggestedBook]}>
        <Text style={styles.title}>Zula Made Some Suggestions Based On YOur Reading</Text>
        {suggestedBooks.map((suggestedBook, index) => (
          < TouchableOpacity key={suggestedBook.id} onPress={() => navigation.navigate("BookList")} style={styles.bookCard}>
            <View style={styles.bookImage}></View>
            <View style={styles.description}>
              <Text >
                {suggestedBook.internal_title}
              </Text>
              <Text >
                {suggestedBook.authors}
              </Text>
            </View>
          </TouchableOpacity >
        ))}
      </View>
    </View>
  )
}

export default Book;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold"
  },
  newBook: {
    display: 'flex',
    width: "100%",
    flexDirection: "row",
    flexBasis: '100%',
    flexWrap: "wrap",
    backgroundColor: "#E7F6EC",
  },
  recentBook: {
    display: 'flex',
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: theme.white,
  },
  suggestedBook: {
    display: 'flex',
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
