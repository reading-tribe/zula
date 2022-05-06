import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type User = {
  userId: string, 
  name: string, 
  nickname: string
};

type Book = {
  id: string, 
  internal_title: string, 
  authors: string
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<HomeStackParamList> | undefined;
  NotFound: undefined;
  Home: undefined;
  Login: User;
  Signup: User;
  Dashboard: User;
  Profile: User
  Books: User;
  BookList: User;
  ProfileSettings: User;
  ChangePassword: User;
  AboutUs: undefined;
  Header: undefined;
  Menu: undefined
};

export type HomeStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Books: undefined;
  Header: undefined;
  BookList: undefined;
  AboutUs: undefined;
  ProfileSettings: undefined;
  ChangePassword: undefined;
  ResetPassword: undefined;
  Menu: undefined
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
