import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Editor from './src/components/editor/Editor';

const App = () => {
  return (
    <View style={styles.container}>
      <Editor />
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