import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const EditorContainer = () => { // { synHighlight }

  const [code, setCode] = useState("");

  const codeExample = 
  `
  import React, { useState } from "react";
  function Example() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  `
  return (
    <View style={styles.editorWindow}>
      <TextInput style={styles.textField}
      placeholder='Type to start coding!'
      onChangeText={newCode => setCode(newCode)}
      autoCapitalize='none'
      multiline={true}
      numberOfLines={10}
      textAlign='left'
      textAlignVertical='top'
      defaultValue={code}
      />
      <SyntaxHighlighter language='javascript' highlighter="hljs" style={docco}>
        {code}
      </SyntaxHighlighter>
    </View>
  )
}

const styles = StyleSheet.create({
  editorWindow: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
    // backgroundColor: "red",
  },
  textField: {
    backgroundColor: "#fff",
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4,
  }
})

export default EditorContainer