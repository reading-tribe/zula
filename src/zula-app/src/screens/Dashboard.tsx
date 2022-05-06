import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Modal, Portal, Appbar } from 'react-native-paper';
import { platform } from "../constants/Layout";
import { RootStackScreenProps } from "../../types";
import { FullHeightScrollView } from "../components/FullHeightScrollView";
import EditDashboard from "../components/EditDashboard";
import { EditIcon } from "../components/Header";
import { getUser, UserState, getUserAction } from "../redux/reducers/users"
import theme from "../constants/Colors";
import style from "../styles/main"

const Dashboard = ({route, navigation }: RootStackScreenProps<"Dashboard">) => {
  const [users, setUsers] = useState<UserState[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const profiles = [
    { name: "Njinga", nickname: "Nickname", child: "Child 1" },
    { name: "Tarik", nickname: "Nickname", child: "Child 2" },
    { name: "Ramona", nickname: "Nickname", child: "Child 3" },
  ]

  const showModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <FullHeightScrollView >
      <View style={style.container}>
        <Text style={styles.title}>Zula</Text>
        <Text style={[style.subtitle]}>{t("dashboard.subtitle")}</Text>
        <Text style={[style.title]}>{t("dashboard.title")}</Text>
        <EditIcon showModal={showModal} />
        <View style={style.avatarContainer}>
          {profiles.map((profile, index) => (
            <TouchableOpacity key={profile.name} style={style.avatar} onPress={() => navigation.navigate("Books", {
              userId: "12345",
              name: profile.name,
              nickname: profile.nickname
            })}>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.nickname}>{profile.nickname}</Text>
              <Text style={styles.child}>{profile.child}</Text>
              <Modal visible={isOpen} onDismiss={showModal}>
                <EditDashboard profile={profile} />
              </Modal>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </FullHeightScrollView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.secondary,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  nickname: {
    color: theme.white,
    fontSize: 18,
  },
  child: {
    color: theme.white,
    fontSize: 14,
  }
});
