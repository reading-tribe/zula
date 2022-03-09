import { StyleSheet, TouchableHighlight } from "react-native";
import { RootStackScreenProps } from "../../types";
import { Text, View } from "../components/Themed";
import theme from "../constants/Colors";
import style from "../styles/main"

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  return (
    <View style={style.container}>
      <Text style={[style.title, styles.title]}>Zula</Text>
      <Text
        style={[style.subtitle, styles.subtitle]}
      >The Reading Tribe</Text>
      <Text style={[style.description, styles.description]}>Welcome! Its Good To See You</Text>
      <View style={styles.buttonContainer} >
        <TouchableHighlight
          style={[style.button, styles.loginButton]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[style.button, styles.signupButton]}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text>Create New Account</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  title: {
    marginTop: 30
  },
  subtitle: {
    marginBottom: 30,
  },
  description: {
    marginBottom: 100,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
  signupButton: {
    width: 200,
  },
  loginButton: {
    width: 200,
    backgroundColor: theme.primary,
    marginBottom: 10,
  },
  loginText: {
    color: theme.secondary
  },
});
