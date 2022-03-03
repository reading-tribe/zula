import { StyleSheet, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../../types';

const Login = ({ navigation }: RootStackScreenProps<'Login'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zula</Text>
      <Text style={styles.subtitle}>The Reading Tribe</Text>
      <Text style={styles.description}>Welcome!</Text>
      <Text style={[styles.description, styles.subText]}>Its Good To See You.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder='Name'
          keyboardType='default'
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
      </View>

      <View style={[styles.inputContainer, styles.passwordField]}>
        <TextInput
          style={styles.inputs}
          placeholder='Password'
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
      </View>

      <View style={styles.buttonContainer} >
      <TouchableOpacity
          style={styles.resetPassword}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text>Did you forget your Password?</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 50
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 30,
    lineHeight: 30
  },
  description: {
    color: '#ffffff',
    fontSize: 55,
    textAlign: 'center',
    lineHeight: 69,
    fontWeight: 'bold',
  },
  subText: {
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderBottomWidth: 1,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  passwordField: {
    marginBottom: 20,
  },
  'inputContainer:last-child': {
    marginBottom: 30,
  },
  inputs: {
    height: 60,
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  resetPassword: {
    flex: 1,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#A0DAB3',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  loginButton: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    height: 56,
    width: 100,
    backgroundColor: '#A0DAB3',
    margin: 4,
    padding: 20,
    borderRadius: 100,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#A0DAB3',
  },
  loginText: {
    color: 'black'
  }
});
