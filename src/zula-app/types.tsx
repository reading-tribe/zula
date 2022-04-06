import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<HomeStackParamList> | undefined;
  NotFound: undefined;
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Books: undefined;
  Header: undefined
};

export type HomeStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Books: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
