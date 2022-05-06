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
              LoginScreen: '/Home/Login',
            },
          },
          Signup: {
            screens: {
              SignupScreen: '/Home/Signup',
            },
          },
          Books: {
            screens: {
              BookScreen: '/Home/Books',
            },
          },
          Dashboard: {
            screens: {
              Dashboard: '/Home/Dashboard',
            },
          },
          ChangePassword: {
            screens: {
              Dashboard: '/Home/ChangePassword',
            },
          },
          ResetPassword: {
            screens: {
              Dashboard: '/Home/ResetPassword',
            },
          },
          AboutUs: {
            screens: {
              Dashboard: '/Home/AboutUs',
            },
          },
          Profile: {
            screens: {
              Profile: '/Home/Profile',
            },
          },
          ProfileSettings: {
            screens: {
              Profile: '/Home/ProfileSetting',
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
