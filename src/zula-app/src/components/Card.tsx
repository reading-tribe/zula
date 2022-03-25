import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

import { Text, View } from "./styles/Themed";
import theme from '../constants/Colors';

const Card = () => {
  let animatedValue = new Animated.Value(0);
  let currentValue = 0;

  animatedValue.addListener(({ value }) => {
    currentValue = value;
  });
  const flipAnimation = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    }
  };

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const rotateYAnimatedStyle = {
    transform: [{ rotateY: setInterpolate }],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titleText}>
          CARD
        </Text>
        <Animated.Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/desktop-computer-screen-with-arrow-to-the-left-and-coin-stack.png',
          }}
          style={[rotateYAnimatedStyle, styles.imageStyle]}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={flipAnimation}>
          <Text style={styles.buttonTextStyle}>
            {' '}
           Flip Card{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.danger
  },
  card: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "pink",
    width: 300,
    height: 300,
    borderColor: theme.secondary
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    fontSize: 16,
    width: 200,
    borderColor: theme.secondary,
  },
  buttonTextStyle: {
    padding: 5,
    color: theme.secondary,
    textAlign: 'center',
  },
  imageStyle: {
    width: 300,
    height: 300,
    borderRadius: 6,
  },
});
