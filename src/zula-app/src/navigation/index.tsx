import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ColorSchemeName, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getHeaderTitle, getDefaultHeaderHeight } from '@react-navigation/elements';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appbar, Button, Menu, Divider } from 'react-native-paper';
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList, HomeStackParamList } from "../../types";
import { actualDimensions, platform } from "../constants/Layout"
import BookScreen from "../screens/Books";
import DashboardScreen from "../screens/Dashboard"
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileScreen from "../screens/Profile";
import SignupScreen from "../screens/Signup";
import Header from "../components/Header"
import { theme, Colors } from "../constants";

const Homestack = createNativeStackNavigator<HomeStackParamList>();

const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleChangeLanguage = async (language) => {
    console.log(language)
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
      anchor={<Appbar.Action icon="arrow-down-drop-circle-outline" size={30} color={Colors.secondary} onPress={toggle} />}>
      <Menu.Item onPress={() => handleChangeLanguage("de")} title="Deutsch" />
      <Divider />
      <Menu.Item onPress={() => handleChangeLanguage("en")} title="English" />
      <Divider />
      <Menu.Item onPress={() => handleChangeLanguage("fr")} title="French" />
    </Menu>
  );
};

function HomestackNavigator() {
  return (
    <Homestack.Navigator>
      <Homestack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Homestack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Homestack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    </Homestack.Navigator>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  const options = {
    customHeader: {
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title=""
            headerLeft={
              <Text />
            }
            headerRight={
              <Appbar.Action icon="account-settings" size={30} color={Colors.secondary} onPress={() => navigation.navigate("Profile")} />
            }
          />
        );
      }
    },

    dashboardHeader: {
      header: ({ navigation, route, options, back }) => {
        const title = getHeaderTitle(options, route.name);
        return (
          <Header
            title="Parent Dashboard"
            headerLeft={
              <LanguageSelect />
            }
            headerRight={
              <Appbar.Action icon="account-settings" size={30} color={Colors.secondary} onPress={() => navigation.navigate("Profile")} />
            }
          />
        );
      }
    },

    homeHeader: {
      header: ({ navigation, route, options, back }) => {
        const title = getHeaderTitle(options, route.name);
        return (
          <Header
            title=""
            headerLeft={
              <Text />
            }
            headerRight={
              <LanguageSelect />
            }
          />
        );
      }
    },
  }

  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={HomestackNavigator} options={options.homeHeader} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={options.dashboardHeader} />
      <Stack.Screen name="Books" component={BookScreen} options={options.customHeader} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? theme.dark : theme.light}
    >
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
    borderColor: Colors.secondary
  },
  headerRight: {
    fontSize: 20,
    marginLeft: 10,
    color: Colors.secondary
  },
  headerLeft: {
    color: Colors.secondary
  }
})
