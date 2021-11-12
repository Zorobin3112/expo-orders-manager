import React from 'react'
import { StyleSheet } from 'react-native'

const setStyle = (backgroundColor, borderRadius) => {
    return StyleSheet.create({
        container: {
            height: 50,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius
        },
        leftSection: {
            width: 50,
            justifyContent: 'center'
        },
        centerSection: {
            flex: 1,
            justifyContent: 'flex-start'
        },
        rightSection: {
            width: 50,
            justifyContent: 'flex-end',
        },
    })
}

export default setStyle
