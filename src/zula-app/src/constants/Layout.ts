import { Platform, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const platform = Platform.OS;

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

export const actualDimensions = {
  height: (height < width) ? width : height,
  width: (width > height) ? height : width
};
