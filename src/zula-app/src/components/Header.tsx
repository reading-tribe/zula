import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from "react-i18next";
import { Appbar, Button, Menu, Divider } from 'react-native-paper';
import theme from "../constants/Colors";

export const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleChangeLanguage = async (language) => {
   /*  console.log(language) */
    i18n.changeLanguage(language)
    toggle()
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Menu
      visible={isOpen}
      onDismiss={toggle}
      anchor={<Appbar.Action icon="arrow-down-drop-circle-outline" size={30} color={theme.secondary} onPress={toggle} />}>
      <Menu.Item onPress={() => handleChangeLanguage("de")} title="Deutsch" />
      <Divider />
      <Menu.Item onPress={() => handleChangeLanguage("en")} title="English" />
      <Divider />
      <Menu.Item onPress={() => handleChangeLanguage("fr")} title="French" />
    </Menu>
  );
};

export const BackIcon = (props) => {
  const navigation = props.navigation

  const toggle = () => {
    navigation.goBack()
  }

  return (
    <Appbar.Action icon="keyboard-backspace" size={30} color={theme.secondary} onPress={toggle} />
  );
}

export const EditIcon = (props) => {
  const { showModal } = props

  return (
    <Appbar.Action icon="pencil-outline" size={30} color={theme.secondary} onPress={showModal} />
  );
}

export const Avatar = (props) => {
  const navigation = props.navigation

  return (
    <Appbar.Action icon="account-settings" size={30} color={theme.secondary} onPress={() => navigation.navigate("Menu")} />
  );
}

export const HeaderLeft = (props) => {
  const navigation = props.navigation

  return (
    <Appbar.Action icon="pencil-outline" size={30} color={theme.secondary} onPress={() => navigation.navigate("Menu")} />
  );
}

export const Header = (props) => {
  return (
    <Appbar.Header style={styles.header}>
      {props.headerLeft}
      <Appbar.Content title={props.title} />
      {props.headerRight}
    </Appbar.Header>
  )
}

export default {
  Header,
  EditIcon,
  LanguageSelect,
  HeaderLeft,
  Avatar
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.white,
  },
  headerTitle: {
    flexBasis: '33%',
  },
  headerLeft: {
    flexBasis: '33%',
    justifyContent: 'flex-start'
  },
  headerRight: {
    flexBasis: '33%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: 'blue',
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 30,
    borderRadius: 100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.secondary
  }
});
