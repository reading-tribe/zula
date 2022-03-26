import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux"
import Navigation from "./src/navigation";
import useColorScheme from "./src/navigation/hooks/useColorScheme";
import { store } from "./src/redux/store"
import "./i18n";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
      </Provider>
    </SafeAreaProvider>
  );
}
