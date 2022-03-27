import { StyleSheet } from 'react-native';
import theme from '../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 56,
    margin: 4,
    marginBottom: 10,
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.primary,
    alignSelf: "center",
  },
  primaryButton:{
    backgroundColor: theme.primary,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inPutlabel:{
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
  avatar: {
    width: 300,
    height: 300,
    marginBottom: 30,
    borderRadius: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary,
  }
});
