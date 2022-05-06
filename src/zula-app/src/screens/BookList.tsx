import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { Modal, Portal } from 'react-native-paper';
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { listBooks, Book, getBooksAction } from "../redux/reducers/books"
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import CreateBook from "../components/CreateBook";
import style from "../styles/main"
import theme from "../constants/Colors";
import { bookCategories } from "./bookslist"

const BookList = ({ navigation }: RootStackScreenProps<"BookList">) => {
  const dispatch = useDispatch()
  const book = useSelector(state => state);
  let bok = {} as Book
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const showModal = () => {
    setIsOpen(!isOpen);
  }

  const handleSearch = (key: string, value: string) => {
    setSearchBooks((prev) => ({
      ...prev,
      [key]: value,
    }))
  };

  useEffect(() => {
    setBooks(bookCategories)
    /*   console.log("BOOKS LIST PAGE:", books) */
    dispatch(listBooks())
  }, [bookCategories]);

  return (
    <FullHeightScrollView >
      <Portal>
        <Modal visible={isOpen} onDismiss={showModal}>
          <CreateBook navigation={navigation} />
        </Modal>
      </Portal>
      <View style={style.container}>
        <Text style={[styles.title]}>{t("bookList.title")}</Text>
        <Text style={[styles.subtitle]}>{t("bookList.subtitle")}</Text>
        <View style={styles.pillContainer}>
          <TouchableHighlight
            style={[style.pill, style.primaryButton]}
            onPress={() => navigation.navigate("Dashboard", {
              userId: "12345",
              name: "user name",
              nickname: "user nickname"
            })}
          >
            <Text>Zula’s Choice</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[style.pill, style.dangerButton]}
            onPress={showModal}
          >
            <Text>New</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[style.pill, style.blueButton]}
            onPress={() => navigation.navigate("Dashboard", {
              userId: "12345",
              name: "user name",
              nickname: "user nickname"
            })}
          >
            <Text>Bestseller</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[style.pill, style.yellowButton]}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text>Award-winning</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[style.pill, style.midnightblueButton]}
            onPress={() => navigation.navigate("Dashboard", {
              userId: "12345",
              name: "user name",
              nickname: "user nickname"
            })}
          >
            <Text style={{ color: theme.white }} >Diversity</Text>
          </TouchableHighlight>
        </View>
        <View style={[style.inputContainer]}>
          <TextInput
            style={style.input}
            placeholder="Search"
            secureTextEntry={false}
            onChangeText={(text: string) => handleSearch("{book category ID}", text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.category}>
          {books.map((bookCategory, index) => (
            <TouchableOpacity key={bookCategory.id} onPress={() => navigation.navigate("Books", {
              userId: bookCategory.id,
              name: bookCategory.internal_title,
              nickname: bookCategory.authors
            })} style={[styles.categoryCard, styles[`category${index}`]]}>
              <Text style={styles.categoryTitle}>
                {bookCategory.internal_title}
              </Text>
              <Text style={styles.categoryDescription}>
                {bookCategory.authors}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
export default BookList;

const styles = StyleSheet.create({
  category: {
    display: 'flex',
    flexBasis: '100%',
    flexDirection: "row",
    justifyContent: 'space-around',
    flexWrap: "wrap",
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    color: theme.secondary,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: theme.secondary,
    marginBottom: 30
  },
  pillContainer: {
    display: 'flex',
    flexBasis: '100%',
    flexDirection: "row",
    backgroundColor: theme.white,
    flexWrap: "wrap",
    justifyContent: 'space-around',
    marginBottom: 30
  },
  categoryCard: {
    backgroundColor: "#E7F6EC",
    display: 'flex',
    flexBasis: '100%',
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: 'space-between',
    height: 120,
    padding: 10,
    marginBottom: 30,
  },
  categoryTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  categoryDescription: {
    fontSize: 18,
    color: theme.white,
  },
  category0: {
    backgroundColor: theme.primary,
  },
  category1: {
    backgroundColor: theme.danger,
  },
  category2: {
    backgroundColor: theme.yellow,
  },
  category3: {
    backgroundColor: theme.blue,
  },
  category4: {
    backgroundColor: theme.midnightblue,
  },
  category5: {
    backgroundColor: theme.primary25,
  },
});
