import React, { useState } from "react"
import { Provider as StoreProvider } from "react-redux"
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigation from "./navigation";
import useColorScheme from "./navigation/hooks/useColorScheme";
import { store } from "./redux/store";
import { theme, Colors } from "./constants";

declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      superLight: ThemeFont;
    }
    interface ThemeColors {
      customColors: object
    }
    interface ThemeAnimation {
      customProperty: number;
    }
    interface Theme {
      userDefinedThemeProperty: string;
    }
  }
}

const CustomTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    customColors: Colors,
  },
  fonts: {
    ...DefaultTheme.fonts,
    superLight: { ...DefaultTheme.fonts['light'] },
  },
  userDefinedThemeProperty: '',
  animation: {
    ...DefaultTheme.animation,
    customProperty: 1,
  },
}

export default function Index() {
  const colorScheme = useColorScheme();

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={CustomTheme}>
        <Navigation colorScheme={colorScheme} />
      </PaperProvider>
    </StoreProvider>
  );
}
