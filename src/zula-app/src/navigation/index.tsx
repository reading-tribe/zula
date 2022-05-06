import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { ColorSchemeName, Pressable, Text } from "react-native";
import { getHeaderTitle } from '@react-navigation/elements';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appbar, Button, Menu, Divider } from 'react-native-paper';
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList, HomeStackParamList } from "../../types";
import { actualDimensions, platform } from "../constants/Layout"
import { Header, BackIcon, EditIcon, LanguageSelect, HeaderLeft, Avatar } from "../components/Header";
import AboutUs from "../screens/AboutUs";
import BookScreen from "../screens/Books";
import BookList from "../screens/BookList";
import ChangePassword from "../screens/ChangePassword";
import DashboardScreen from "../screens/Dashboard"
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import MenuScreen from "../screens/Menu";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileScreen from "../screens/Profile";
import ProfileSettings from "../screens/ProfileSettings";
import SignupScreen from "../screens/Signup";
import { theme, Colors } from "../constants";

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {

  return <Pressable
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}>
    <FontAwesome
      name="info-circle"
      size={25}
      color={theme.light.colors.text}
      style={{ marginRight: 15 }}
    />
  </Pressable>
}

const Homestack = createNativeStackNavigator<HomeStackParamList>();

function HomestackNavigator() {
  const options = {
    customHeader: {
      header: ({ navigation, route, options, back }) => {
        const opt = options.header
        return (
          <Header
            title=""
            headerLeft={
              <LanguageSelect />
            }
            headerRight={
              <Avatar navigation={navigation} />
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
              <EditIcon navigation={navigation} />}
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

    loginHeader: {
      header: ({ navigation, route, options, back }) => {
        const title = getHeaderTitle(options, route.name);
        return (
          <Header
            title=""
            headerLeft={
              <BackIcon navigation={navigation} />
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
    <Homestack.Navigator>
      <Homestack.Screen name="Root" component={HomeScreen} options={options.homeHeader} />
      <Homestack.Screen name="Login" component={LoginScreen} options={options.homeHeader} />
      <Homestack.Screen name="Signup" component={SignupScreen} options={options.homeHeader} />
      <Homestack.Screen name="ChangePassword" component={ChangePassword} options={options.loginHeader} />
      <Homestack.Screen name="AboutUs" component={AboutUs} options={options.homeHeader} />
      <Homestack.Screen name="Dashboard" component={DashboardScreen} options={options.customHeader} />
      <Homestack.Screen name="Books" component={BookScreen} options={options.customHeader} />
      <Homestack.Screen name="BookList" component={BookList} options={options.customHeader} />
      <Homestack.Screen name="Profile" component={ProfileScreen} options={options.customHeader} />
      <Homestack.Screen name="ProfileSettings" component={ProfileSettings} options={options.customHeader} />
    </Homestack.Navigator>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const options = {
    customHeader: {
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title=""
            headerLeft={
              <LanguageSelect />
            }
            headerRight={
              <Avatar navigation={navigation} />
            }
          />
        );
      }
    },
  }

  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={HomestackNavigator} options={{ headerShown: false }} />
      <Homestack.Screen name="NotFound" component={NotFoundScreen} options={options.customHeader} />
      <Stack.Group screenOptions={{ presentation: 'modal', }}>
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
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
      <RootNavigator />
    </NavigationContainer>
  );
}
