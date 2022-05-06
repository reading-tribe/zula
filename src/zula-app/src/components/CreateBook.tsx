import React, { useState, useEffect, createRef } from "react";
import { ScrollView, StyleSheet, TextInput, Text, View, TouchableHighlight } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { createBook, CreateBookRequest, createBookAction } from "../redux/reducers/books"
import theme from "../constants/Colors";
import style from "../styles/main"

const bookIbj = {
  internal_title: "",
  authors: ""
}

const CreateBook = (props) => {
  const navigation = props.navigation
  const [bookOject, setBookValue] = useState(bookIbj);
  const [isOpen, setIsOpen] = useState(false);
  const books = useSelector(state => state);
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  const inputRef = createRef<TextInput>();

  const handleLanguageChange = async (language) => {
    i18n.changeLanguage(language)
    toggle()
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const handleChange = (key: string, value: string) => {
    setBookValue((prev) => ({
      ...prev,
      [key]: value,
    }))
  };

  const handleSubmit = () => {
 /*    dispatch(createBook({
      internal_title: bookOject.internal_title,
      authors: bookOject.authors
    })) */
    navigation.navigate("Books")
  };

  /*   useEffect(() => {
      dispatch(createBook(book))
    }, [dispatch]) */

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={[style.container, {backgroundColor: theme.white}]}>
        <Text style={[style.title]}>Create A Book</Text>
        <Text style={style.inPutlabel}>Title</Text>
        <View style={style.inputContainer}>
          <TextInput
            ref={inputRef}
            style={style.input}
            placeholder="Title"
            secureTextEntry={false}
            value={bookOject.internal_title}
            onChangeText={(text: string) => handleChange("internal_title", text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>

        <Text style={style.inPutlabel}>Authors</Text>
        <View style={style.inputContainer}>
          <TextInput
            ref={inputRef}
            style={style.input}
            placeholder="Authors"
            secureTextEntry={false}
            value={bookOject.authors}
            onChangeText={(text: string) => handleChange("authors", text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>

        <View style={style.buttonContainer} >
          <TouchableHighlight
            style={[style.button, style.primaryButton]}
            onPress={() => handleSubmit()}>
            <Text style={styles.loginText}>Done</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

export default connect(
  state => ({
    book: state
  }),
  {
    createBook,
    createBookAction
  }
)(CreateBook);

const styles = StyleSheet.create({
  label: {
    textAlign: "left",
    justifyContent: "flex-start",
    color: theme.white,
    marginBottom: 5,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  loginText: {
    color: theme.secondary,
  }
});
