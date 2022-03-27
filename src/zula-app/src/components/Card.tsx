import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import theme from '../constants/Colors';
import style from "../styles/main"

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

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  })

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })

  const frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0]
  });

  const backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1]
  });

  const elevationFront = animatedValue.interpolate({
    inputRange: [0, 25],
    outputRange: [10, 0]
  })

  const elevationBack = animatedValue.interpolate({
    inputRange: [155, 180],
    outputRange: [0, 10]
  })

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }]
  }
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }]
  }


  return (
    <SafeAreaView style={style.container}>
      <Animated.View style={[styles.card, { elevation: elevationFront }, { opacity: frontOpacity }]}>
        <Text style={{ fontSize: 20, paddingTop: 8, paddingLeft: 8, color: 'black', lineHeight: 20 }}>
          Front Page
          </Text>
        <TouchableOpacity style={[style.button, {backgroundColor: theme.primary}]}  onPress={flipAnimation}>
          <Text style={styles.buttonTextStyle}>
            Flip to back
            </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.card, backAnimatedStyle, styles.paperBack, { elevation: elevationBack }, { opacity: backOpacity }]}>
        <Text>Back Page </Text>
        <TouchableOpacity style={[style.button]} onPress={flipAnimation}>
          <Text style={styles.buttonTextStyle}>
            Flip to front
            </Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  paperBack: {
    top: -215,
  },
  card: {
    marginHorizontal: 15,
    minHeight: 200,
    borderRadius: 5,
    width: 350,
    marginBottom: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.secondary
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonTextStyle: {
    color: theme.secondary,
    textAlign: 'center',
  },
});
