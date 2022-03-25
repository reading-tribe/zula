import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Text, View } from "../components/styles/Themed";
import { RootStackScreenProps } from "../../types";
import theme from "../constants/Colors";
import style from "../components/styles/main"

const Dashboard = ({ navigation }: RootStackScreenProps<"Dashboard">) => {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={[style.title]}>Zula</Text>
        <Text style={[style.subtitle]}>{t("subtitle")}</Text>
        <Text style={[style.description, styles.description]}>{t("description")}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Books")}>
          <Text style={[styles.nickname, { color: "red" }]}>BOOKS</Text>
        </TouchableOpacity>
        <View style={styles.avatarContainer} >
          <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.name}>Njinga</Text>
            <Text style={styles.nickname}>Nickname</Text>
            <Text style={styles.child}>Child 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.name}>Tarik</Text>
            <Text style={styles.nickname}>Nickname</Text>
            <Text style={styles.child}>Child 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.name}>Ramona</Text>
            <Text style={styles.nickname}>Nickname</Text>
            <Text style={styles.child}>Child 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
export default Dashboard;

const styles = StyleSheet.create({
  description: {
    marginBottom: 40,
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
    backgroundColor: theme.primary,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 100
  },
  nickname: {
    color: theme.white,
    fontSize: 24,
    marginBottom: 10,
  },
  child: {
    color: theme.white,
    fontSize: 18,
  }
});
