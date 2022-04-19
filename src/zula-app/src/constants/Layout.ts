import { Platform, Dimensions } from 'react-native';

export const { height, width } = Dimensions.get('window');
export const platform = Platform.OS;

export const isIphoneX =
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
