import React from 'react'
import { useMemo } from 'react'
import setStyle from './styles/TitleInput.style.js'
import { View, Text, TextInput } from 'react-native'
import Section from './Section.js'

export default function TitleInput({ id, title, value, editable, onChangeText, ...styleProps }) 
{
  const styleTitleInput = useMemo(() => setStyle({editable, ...styleProps}), [{...styleProps}])
  
  return (
    <View style={styleTitleInput.container}>
      <Text style={styleTitleInput.title}>{title}</Text> 
      <TextInput 
        style={styleTitleInput.input}
        value={String(value)}
        editable={editable}
        onChangeText={onChangeText}
      />
    </View>
  )
}
