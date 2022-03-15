import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { ColorSchemeName, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList, HomeStackParamList } from "../../types";
import DashboardScreen from "../screens/Dashboard"
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileScreen from "../screens/Profile";
import SignupScreen from "../screens/Signup";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Homestack = createNativeStackNavigator<HomeStackParamList>();

function HomestackNavigator() {
  const [language, setLanguage] = useState('de');
  const { i18n } = useTranslation();

  const options = {
    homeHeader: {
      headerRight: () => (
        <TouchableOpacity
          onPress={() => handleChangeLanguage()}
        >
          <Text style={{ fontSize: 25 }}>^</Text>
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
          <Text style={{ fontSize: 25 }}>^</Text>
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
    if (language == 'de') {
      setLanguage('en')
    } else {
      setLanguage('de')
    }
    i18n.changeLanguage(language)
  };

  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={RootStackNavigator} options={options.homeHeader} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={options.dashboard} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function RootStackNavigator() {
  return (
    <Homestack.Navigator>
      <Homestack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Homestack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Homestack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    </Homestack.Navigator>
  )
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <HomestackNavigator />
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
  }
})
