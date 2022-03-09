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
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 30
  },
  description: {
    color: theme.white,
    fontSize: 55,
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
    backgroundColor: theme.white,
    borderRadius: 5,
    borderBottomWidth: 1,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inPutlabel:{
    textAlign: "left",
    justifyContent: "flex-start",
    color: theme.white, 
    marginBottom: 5, 
    alignSelf: "flex-start",
    fontSize: 15, 
  },
});
