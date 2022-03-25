import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: '/',
      Login: 'login',
      Signup: 'signup',
      Profile: 'profile',
      NotFound: '*',
    },
  },
};

export default linking;
