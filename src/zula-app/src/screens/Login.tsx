import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { RootStackScreenProps } from "../../types";
import { Text, View } from "../components/Themed";
import style from '../styles/main'

const Login = ({ navigation }: RootStackScreenProps<"Login">) => {
  return (
    <View style={style.container}>
      <Text style={[style.title, styles.title]}>Zula</Text>
      <Text style={[style.subtitle, styles.subtitle]}>The Reading Tribe</Text>
      <Text style={style.description}>Welcome!</Text>
      <Text style={[style.description, styles.subText]}>Its Good To See You.</Text>
      <Text style={style.inPutlabel}>Name</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Name"
          keyboardType="default"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <Text style={style.inPutlabel}>Password</Text>
      <View style={[style.inputContainer, styles.passwordField]}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer} >
      <TouchableOpacity
          style={styles.resetPassword}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text>Did you forget your Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, styles.loginButton]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  title: {
    marginTop: 40
  },
  subtitle: {
    marginBottom: 30,
  },
  subText: {
    marginBottom: 30,
  },
  passwordField: {
    marginBottom: 20,
  },
  inputs: {
    height: 60,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  resetPassword: {
    flex: 1,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#A0DAB3",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 5,
  },
  loginButton: {
    flex: 1,
    width: 100,
    backgroundColor: "#A0DAB3",
    marginTop: 20,
  },
  loginText: {
    color: "#00263A"
  }
});
