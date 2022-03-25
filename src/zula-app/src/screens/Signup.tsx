import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import { Text, View } from "../components/styles/Themed";
import style from "../components/styles/main"

const Signup = ({ navigation }: RootStackScreenProps<"Signup">) => {
  const { t } = useTranslation()

  return (
    <View style={style.container}>
      <Text style={[style.title]}>Zula</Text>
      <Text style={[style.subtitle]}>{t("subtitle")}</Text>
      <Text style={[style.description]}>{t("description")}</Text>
      <Text style={style.inPutlabel}>Name</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Name"
          keyboardType="default"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <Text style={style.inPutlabel}>Email</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <Text style={style.inPutlabel}>Password</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer} >
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Back to login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, styles.signupButton]}
          onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.loginText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Signup;

const styles = StyleSheet.create({
  label: {
    textAlign: "left",
    justifyContent: "flex-start",
    color: "white",
    marginBottom: 5,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  inputs: {
    height: 60,
    flex: 1
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  signupButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A0DAB3"
  },
  loginText: {
    color: "#00263A",
  }
});
