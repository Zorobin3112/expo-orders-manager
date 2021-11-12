import React from 'react'
import { StyleSheet } from 'react-native'

const styleProdItem = StyleSheet.create({
    container: {
      paddingVertical: 8,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    leftSection: {
      marginLeft: 10
    },
    inputSection: {
      flex: 1,
      marginHorizontal: 10
    },
    inputRow: {
      flex: 1
    }
})

export default styleProdItem
