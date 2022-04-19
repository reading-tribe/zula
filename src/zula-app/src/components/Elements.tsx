import React, { useState } from 'react';
import { TouchableHighlight as Button, Text as DefaultText, View as DefaultView } from 'react-native';
import Theme from '../constants/theme';
import useColorScheme from '../navigation/hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Theme.light.colors & keyof typeof Theme.dark.colors
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Theme[theme].colors[colorName];
  }
}

type ThemeProps = {
  themeColor?: string;
};

export type ButtonProps = ThemeProps & Button['props'];
export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function TouchableHighlight(props: ButtonProps) {
  const { style, themeColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: themeColor, dark: themeColor }, 'primary');

  return <Button style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Text(props: TextProps) {
  const { style, themeColor, ...otherProps } = props;
  const color = useThemeColor({ light: themeColor, dark: themeColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, themeColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: themeColor, dark: themeColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
