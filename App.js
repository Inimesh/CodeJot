import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Display from './src/components/display/Display';

App = () => {
  return (
    <View style={styles.container}>

      <Display />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App