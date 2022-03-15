import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContainer from "./src/index";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
}
