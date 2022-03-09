import * as React from "react";
import { ColorSchemeName, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "../../types";
import DashboardScreen from "../screens/Dashboard"
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileScreen from "../screens/Profile";
import SignupScreen from "../screens/Signup";

const Homestack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomestackNavigator() {
  const options = {
    header: {
      headerShown: false
    },

    dashboard: {
      title: "Parent Dashboard",
      headerBackVisible: false,
      headerRight: () => (
        <TouchableOpacity >
          <Text style={{color: "#ffffff", fontSize: 25}}>^</Text>
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
        color: "#ffffff",
        fontSize: 25
      },
      headerStyle: {
        backgroundColor: "#00263A",
      }
    }
  }


  return (
    <Homestack.Navigator initialRouteName="Home">
      <Homestack.Screen name="Home" component={HomeScreen} options={options.header} />
      <Homestack.Screen name="Login" component={LoginScreen} options={options.header} />
      <Homestack.Screen name="Signup" component={SignupScreen} options={options.header} />
      <Homestack.Screen name="Dashboard" component={DashboardScreen} options={options.dashboard} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={options.header} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Profile" component={ProfileScreen} options={options.header} />
      </Stack.Group>
    </Homestack.Navigator>
  );
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
    borderRadius: 100
  }
})
