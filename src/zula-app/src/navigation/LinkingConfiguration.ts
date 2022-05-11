import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: '/Home',
            },
          },
          Login: {
            screens: {
              LoginScreen: '/Login',
            },
          },
          Signup: {
            screens: {
              SignupScreen: '/Signup',
            },
          },
          Books: {
            screens: {
              BookScreen: '/Books',
            },
          },
          Dashboard: {
            screens: {
              Dashboard: '/Dashboard',
            },
          },
          ChangePassword: {
            screens: {
              Dashboard: '/ChangePassword',
            },
          },
          ResetPassword: {
            screens: {
              Dashboard: '/ResetPassword',
            },
          },
          AboutUs: {
            screens: {
              Dashboard: '/AboutUs',
            },
          },
          Profile: {
            screens: {
              Profile: '/Profile',
            },
          },
          ProfileSettings: {
            screens: {
              Profile: '/ProfileSetting',
            },
          }
        },
      },
      Menu: 'menu',
      NotFound: '*',
    },
  },
};

export default linking;
