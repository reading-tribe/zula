import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../../types';

const Home = ({ navigation }: RootStackScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zula</Text>
      <Text style={styles.subtitle}>The Reading Tribe</Text>
      <Text style={styles.description}>Welcome! Its Good To See You</Text>
      <View style={styles.buttonContainer} >
        <TouchableHighlight
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Primary Button</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 60
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 30,
    lineHeight: 30
  },
  description: {
    color: '#ffffff',
    fontSize: 55,
    lineHeight: 69,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderBottomWidth: 1,
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
  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 56,
    margin: 4,
    padding: 20,
    color: '#ffffff',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#A0DAB3',
    alignSelf: 'center'
  },
  loginText: {
    color: '#ffffff'
  }
});
