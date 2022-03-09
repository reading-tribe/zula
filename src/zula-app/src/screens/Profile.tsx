import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../../types";
import style from '../styles/main'

const Profile = ({ navigation }: RootStackScreenProps<"Profile">) => {
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={[style.title, styles.title]}>Zula</Text>
        <Text style={[style.subtitle, styles.subtitle]}>The Reading Tribe</Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("Home")}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  title: {
    marginTop: 50
  },
  subtitle: {
    marginBottom: 30,
  },
});
