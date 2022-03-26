import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ColorSchemeName, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList, HomeStackParamList } from "../../types";
import BookScreen from "../screens/Books";
import DashboardScreen from "../screens/Dashboard"
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileScreen from "../screens/Profile";
import SignupScreen from "../screens/Signup";

import themes from "../constants/theme";

const Homestack = createNativeStackNavigator<HomeStackParamList>();

function HomestackNavigator() {
  return (
    <Homestack.Navigator>
      <Homestack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Homestack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Homestack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Homestack.Screen name="Books" component={BookScreen} options={{ headerShown: false }} />
    </Homestack.Navigator>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  const [language, setLanguage] = useState("de");
  const { i18n } = useTranslation();

  const options = {
    homeHeader: {
      title: "",
      headerBackVisible: false,
      headerLeft: () => null,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => handleChangeLanguage()}
        >
          <Text style={styles.headerRight}>{language}</Text>
        </TouchableOpacity>
      ),
    },

    dashboard: {
      title: "Parent Dashboard",
      headerBackVisible: false,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => handleChangeLanguage()}
        >
          <Text style={styles.headerRight}>{language}</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity >
          <Image
            style={styles.avatar}
            source={require("../assets/images/icon.png")}
          />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        fontSize: 25,
        color: "#00263A"
      },
      headerStyle: {
        backgroundColor: "#F7F7F7",
      }
    }
  }

  const handleChangeLanguage = () => {
    if (language == "de") {
      setLanguage("en")
    } 
    if (language == "en") {
      setLanguage("fr")
    }
    if (language == "fr") {
      setLanguage("de")
    }
    i18n.changeLanguage(language)
  };

  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={HomestackNavigator} options={options.homeHeader} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={options.dashboard} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  let theme;

  const setTheme = () => {
    theme = themes.light
    if (colorScheme === "dark") {
      theme = themes.dark
    }
    return theme
  };

  setTheme()

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={theme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 30,
    borderRadius: 100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#00263A"
  },
  headerRight: {
    fontSize: 20,
    color: "#00263A"
  }
})
