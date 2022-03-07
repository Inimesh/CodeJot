import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


const Editor = () => {
  const [text, setText] = useState("")

  return (
    <View style={styles.editorWindow}>
      <TextInput style={styles.input}
      placeholder='Type to start coding!'
      onChangeText={newText => setText(newText)}
      multiline
      textAlign='left'
      defaultValue={text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  editorWindow: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "red",
    borderWidth: 1,
  },
  input: {
    backgroundColor: "#fff"
  }
})
export default Editor