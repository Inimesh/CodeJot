import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const EditorContainer = ({ language }) => {

  const [code, setCode] = useState("def funct(): return True");

  return (
    <View style={styles.editorWindow}>
      <SyntaxHighlighter language={language} highlighter="hljs" style={docco} customStyle={[styles.codeInputOutput, styles.codeOutput]}>
        {code}
      </SyntaxHighlighter>
      <TextInput style={[styles.codeInputOutput, styles.codeInput]}
      placeholder='Type to start coding!'
      onChangeText={newCode => setCode(newCode)}
      autoCapitalize='none'
      multiline={true}
      numberOfLines={10}
      textAlign='left'
      textAlignVertical='top'
      defaultValue={code}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  editorWindow: {
    margin: 12,
    borderWidth: 1.5,
    borderRadius: 4,
    minHeight: 46, // TODO change hardcoded minimum height of editor window
    // backgroundColor: "red",
  },

  codeInput: {
    // padding: 8
  },
  
  codeInputOutput: {
    // backgroundColor: "red",
    // backgroundColor: "#fff",
    position: "absolute",
    padding: 8,
    borderRadius: 4,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
    fontSize: 12,
    display: "flex",
    // line spacing to match that of the SyntaxHighlighterComponent here???
  },

  codeOutput: {
    // padding: 8
  }
})

export default EditorContainer