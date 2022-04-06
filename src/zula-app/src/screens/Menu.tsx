import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { RootStackScreenProps } from "../../types";
import style from "../styles/main"


const Menu = ({ navigation }: RootStackScreenProps<"Menu">) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <Text style={[styles.title]}>{t("subtitle")}</Text>
      <TouchableOpacity
        style={styles.headerRight}
        onPress={() => navigation.navigate("Profile")}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    height: 150,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'space-around',
    shadowRadius: 0,
    zIndex: 9,
  },
  headerTitle: {
    display: 'flex',
    flexBasis: '33%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  headerLeft: {
    flexBasis: '33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },
  headerRight: {
    flexBasis: '33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',

  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: 'blue',
  },
});
