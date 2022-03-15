import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../../types";
import style from '../styles/main'

const Profile = ({ navigation }: RootStackScreenProps<"Profile">) => {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={[style.title]}>Zula</Text>
        <Text style={[style.subtitle]}>{t("subtitle")}</Text>
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
