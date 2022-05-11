import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from './src/navigation/hooks/useCachedResources';
import AppContainer from "./src/index"
import "./i18n";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}
