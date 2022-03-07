import React, { useState } from 'react'
import { View, TextInput } from 'react-native'


const Editor = () => {
  const [text, setText] = useState("")

  return (
    <View>
      <TextInput
      placeholder='Type to start coding!'
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      />
    </View>
  )
}

export default Editor