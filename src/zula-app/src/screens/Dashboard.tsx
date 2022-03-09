import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../../types";
import style from "../styles/main"

const Dashboard = ({ navigation }: RootStackScreenProps<"Dashboard">) => {

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={[style.title, styles.title]}>Zula</Text>
        <Text style={[style.subtitle, styles.subtitle]}>The Reading Tribe</Text>
        <Text style={[style.description, styles.description]}>Welcome! Its Good To See You</Text>
        <View style={styles.avatarContainer} >
          <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate("Profile")}> 
            <Text style={styles.name}>Njinga</Text>
            <Text style={styles.nickname}>Nickname</Text>
            <Text style={styles.nickname}>Child 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.name}>Tarik</Text>
            <Text style={styles.nickname}>Nickname</Text>
            <Text style={styles.nickname}>Child 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.name}>Ramona</Text>
            <Text style={styles.nickname}>Nickname</Text>
            <Text style={styles.nickname}>Child 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
export default Dashboard;

const styles = StyleSheet.create({
  title: {
    marginTop: 40
  },
  subtitle: {
    marginBottom: 30,
  },
  description: {
    marginBottom: 50,
  },
  avatarContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 300,
    height: 300,
    marginBottom: 30,
    borderRadius: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  name: {
    color: "#00263A",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 100
  },
  nickname: {
    color: "#99A8B0",
    fontSize: 24,
    marginBottom: 10,
    opacity: 1
  }
});
