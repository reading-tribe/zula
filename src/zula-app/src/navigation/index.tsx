import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import { RootStackParamList, HomeTabParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Homestack = createStackNavigator<HomeTabParamList>();

function HomestackNavigator() {
  return (
    <Homestack.Navigator initialRouteName="Home">
      <Homestack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Homestack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Homestack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
    </Homestack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={HomestackNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
