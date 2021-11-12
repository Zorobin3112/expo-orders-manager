import React from 'react'
import styleSection from './styles/Section.style.js'
import { View } from 'react-native'

export default function Section({children, style}) {
  return (
    <View style={[styleSection.container, style]}>
      {children}
    </View>
  )
}
