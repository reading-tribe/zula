import { Provider } from "react-redux"
import Navigation from "./navigation";
import useColorScheme from "./navigation/hooks/useColorScheme";
import { store } from "./redux/store"
import "../i18n";

export default function AppContainer() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <Navigation colorScheme={colorScheme} />
    </Provider>
  );
}
