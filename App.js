import { StyleSheet, SafeAreaView, Platform, StatusBar, Text } from 'react-native';

import EditorContainer from './src/components/editor_container/EditorContainer';
// selection for language
// prop: synHighlight={stylesheet object}
const App = () => {
  return (
    <SafeAreaView style={styles.app}> 
      <EditorContainer /> 
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  app: {
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