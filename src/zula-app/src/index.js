import Navigation from "./navigation";
import useColorScheme from "./navigation/hooks/useColorScheme";
import "../i18n";

export default function AppContainer() {
  const colorScheme = useColorScheme();

  return (
    <Navigation colorScheme={colorScheme} />
  );
}
