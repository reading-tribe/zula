import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from "../components/Elements";

export interface HeaderProps {
  headerLeft?: JSX.Element;
  headerRight?: JSX.Element;
  title: string;
}

export const Header = (props: HeaderProps) => {

  return (
    <View style={{
      ...styles.header,
    }}>
      <View style={styles.headerLeft}>
        {props.headerLeft !== undefined && props.headerLeft}
      </View>
      <Text style={styles.title}>
          {props.title}
        </Text>
      <View style={styles.headerRight}>
        {props.headerRight !== undefined && props.headerRight}
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    height: 150,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'space-around',
    shadowRadius: 0,
    zIndex: 9,
  },
  headerTitle: {
    display: 'flex',
    flexBasis: '33%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  headerLeft: {
    flexBasis: '33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },
  headerRight: {
    flexBasis: '33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',

  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: 'blue',
  },
});
