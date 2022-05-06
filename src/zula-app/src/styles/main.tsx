import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import theme from '../constants/Colors';
import { platform } from "../constants/Layout";
import { api } from '../redux/reducers/api';

const { colors } = useTheme();

console.log("COLORS", colors)
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
  /*   backgroundColor: colors.primary, */
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    flex: 1,
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
    lineHeight: 50,
    color: theme.secondary,
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 20,
    lineHeight: 30,
    alignSelf: 'center',
    textAlign: "center",
  },
  description: {
    flex: 1,
    color: theme.secondary,
    fontSize: 40,
    lineHeight: 50,
    fontWeight: "bold",
    marginBottom: 30,
  },
  pill: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 30,
    marginBottom: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.primary,
    alignSelf: "center",
  },

  buttonContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 4,
    marginBottom: 10,
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.primary,
    alignSelf: "center",
  },
  bottomView: {
    /* backgroundColor: colors.primary, */
    width: '100%',
    display: "flex",
    height: 50,
    justifyContent: 'center',
   
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
 
   /* position:"absolute", */
   right:0,
   bottom: 10,
    alignSelf: 'flex-end',
  },
  textBottom: {
    fontSize: 20,
    margin: "auto",
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
    marginBottom: 20,
    lineHeight: 30,
    alignSelf: 'center',
  },
  primaryButton: {
    width: "45%",
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    width: "45%",
    backgroundColor: theme.secondary,
  },
  whiteButton: {
    width: "45%",
    backgroundColor: theme.white,
  },
  dangerButton: {
    width: "45%",
    backgroundColor: theme.danger,
  },
  yellowButton: {
    width: "45%",
    backgroundColor: theme.yellow,
  },
  blueButton: {
    width: "45%",
    backgroundColor: theme.blue,
  },
  midnightblueButton: {
    width: "45%",
    backgroundColor: theme.midnightblue,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
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
    borderColor: theme.secondary,
    backgroundColor: theme.white,
    height: 50,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    flex: 1
  },
  resetPassword: {
    marginTop: 5,
    marginBottom: 70
  },
  avatarContainer: {
    display: 'flex',
    flexBasis: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "center",
  },
  avatar: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    flexBasis: platform === "web" ? "33%" : "45%",
    flexDirection: platform == "web" ? "row" : "column",
    width: platform === "web" ? "33%" : "45%",
    height: 100,
    borderRadius: 150,
    backgroundColor: colors.primary,
    marginBottom: 30,
  },
  avatarImage: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 70,
    margin: 10,
    height: 60,
    backgroundColor: colors.primary
  },
});
