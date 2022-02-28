import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function PageOneScreen({ navigation }: RootTabScreenProps<'PageOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
