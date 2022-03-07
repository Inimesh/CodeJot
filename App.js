import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import Editor from './src/components/editor/Editor';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Editor />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 12,
    marginRight: 12,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});

export default App