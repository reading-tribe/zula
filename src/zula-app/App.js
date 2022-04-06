import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContainer from "./src/index"
import "./i18n";

export default function App() {

  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
}
