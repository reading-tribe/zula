import { Platform, Dimensions, PixelRatio } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === "ios" && (height === 812 || width === 812);

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  isIphoneX
};
