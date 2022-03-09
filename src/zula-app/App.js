import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import useColorScheme from "./src/navigation/hooks/useColorScheme";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}
