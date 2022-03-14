import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const EditorContainer = () => { // { synHighlight }

  const [code, setCode] = useState("")

  return (
    <View style={styles.editorWindow}>
      <TextInput style={styles.textField} // In an array append a synHighlight styleSheet object that is passed as props
      placeholder='Type to start coding!'
      onChangeText={newCode => setCode(newCode)}
      multiline={true}
      textAlign='left'
      defaultValue={code}
      />
      <SyntaxHighlighter language='javascript' highlighter="hljs">
        {code}
      </SyntaxHighlighter>
    </View>
  )
}

const styles = StyleSheet.create({
  editorWindow: {
    borderRadius: 4,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "red",
    borderWidth: 1,
  },
  textField: {
    backgroundColor: "#fff"
  }
})

export default EditorContainer