import React, { useState, useEffect } from "react";
import { Appbar } from 'react-native-paper';
import theme from "../constants/Colors";
import style from "../styles/main"

const EditDashboard = (props) => {
  const [profile, setProfile] = useState({});

  const editProfile = () => {
    console.log("Editdashboard", profile)
  }

  useEffect(() => {
    setProfile(props.profile); 
 }, [props]);

  return (
    <Appbar.Action icon="pencil-outline" size={30} color={theme.secondary} style={{alignSelf: "center"}} onPress={editProfile} />
  );
}

export default EditDashboard;
