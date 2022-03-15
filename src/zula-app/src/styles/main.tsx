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
    marginBottom: 30,
  },
  description: {
    color: theme.secondary,
    fontSize: 50,
    lineHeight: 65,
    fontWeight: "bold",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    margin: 4,
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.primary,
    alignSelf: "center",
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
});
