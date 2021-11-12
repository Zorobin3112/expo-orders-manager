import React from 'react'
import { StyleSheet } from 'react-native'

const styleOrderItem = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      margin: 8,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.4,
      shadowRadius: 5, 
    },
    topBar: {
      marginHorizontal: 10,
      paddingVertical: 8,
    },
    customerName: {
      padding: 5,
      borderRadius: 5,
      fontSize: 20,
      color: '#fff'
    },
})

export default styleOrderItem
