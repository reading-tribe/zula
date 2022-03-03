import { StyleSheet, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../../types';

const Signup = ({ navigation }: RootStackScreenProps<'Signup'>) => {

  const signup = () => {
    console.log('SIGNUP SUCCESSFUL')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zula</Text>
      <Text style={styles.subtitle}>The Reading Tribe</Text>
      <Text style={styles.description}>Join Our Reading Tribe</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Name"
          keyboardType="default"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer} >
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Back to login</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={[styles.button, styles.signupButton]}
          onPress={() => signup()}
        >
          <Text style={styles.loginText}>Done</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default Signup;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*  justifyContent: 'center', */
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 140
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 50,
    lineHeight: 30
  },
  description: {
    color: '#ffffff',
    fontSize: 60,
    marginBottom: 50,
    lineHeight: 69,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderBottomWidth: 1,
    width: 620,
    height: 60,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 60,
    flex: 1
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    margin: 4,
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#A0DAB3',
    alignSelf: 'center'
  },
  loginButton: {
    width: 239,
  },
  signupButton: {
    width: 355,
    backgroundColor: '#A0DAB3'
  },
  loginText: {
    color: 'black'
  }
});
