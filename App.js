import { StyleSheet, SafeAreaView, Platform, StatusBar, Text } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-material-dropdown-v2';
import EditorContainer from './src/components/editor_container/EditorContainer';

const App = () => {
  [language, setLanguage] = useState('javascript')

  let availableLanguages = [
    {
      label: 'JavaScript',
      value: 'javascript'
    },
    {
      label: 'Python',
      value: 'python'
    },
    {
      label: 'Ruby',
      value: 'ruby'
    },
    {
      label: 'JSON',
      value: 'json'
    },
  ]

  return (
    <SafeAreaView style={styles.app}> 
      <Dropdown 
        label='Select Language' 
        data={availableLanguages}
        onChangeText={(newLang) => setLanguage(newLang)}
      />
      <EditorContainer language={language} /> 
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