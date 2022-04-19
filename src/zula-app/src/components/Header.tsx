import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar, Button, Menu, Divider } from 'react-native-paper';
import theme from "../constants/Colors";

export interface HeaderProps {
  headerLeft: JSX.Element | string;
  headerRight: JSX.Element | string;
  title: JSX.Element | string;
}

export const Header = (props: HeaderProps) => {
  return (
    <Appbar.Header style={styles.header}>
      {props.headerLeft}
      <Appbar.Content title={props.title} />
      {props.headerRight}
    </Appbar.Header>
  )
}

export default Header;

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
  }
});
