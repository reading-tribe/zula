import { StyleSheet } from 'react-native';
import theme from '../constants/Colors';
import { platform } from "../constants/Layout";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 10
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 20,
  },
  description: {
    color: theme.secondary,
    fontSize: 50,
    lineHeight: 65,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 56,
    marginTop: 4,
    marginBottom: 10,
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.primary,
    alignSelf: "center",
  },
  primaryButton: {
    width: "45%",
    backgroundColor: theme.primary,
  },
  secondaryButton: {
    width: "45%",
    backgroundColor: theme.secondary,
  },
  whiteButton: {
    width: "45%",
    backgroundColor: theme.white,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inPutlabel: {
    textAlign: "left",
    justifyContent: "flex-start",
    color: theme.secondary,
    marginBottom: 5,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  input: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5,
    borderColor: theme.gray,
    backgroundColor: theme.white,
    height: 60,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1
  },
  avatarContainer: {
    display: 'flex',
    flexBasis: "100%",
    flexDirection: platform == "web" ? "row" : "column",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 30,
  },
  avatar: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexBasis: platform === "web" ? "33%" : "80%",
    flexDirection: platform == "web" ? "row" : "column",
    width: platform === "web" ? "33%" : "80%",
    height: 300,
    marginBottom: 30,
    borderRadius: 150,
    backgroundColor: theme.primary,
  }
});
