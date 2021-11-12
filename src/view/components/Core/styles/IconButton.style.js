import { StyleSheet } from 'react-native'

const setStyle = ({...styleProps}) => {
    const {
        width, 
        height, 
        backgroundColor, 
        iconWidth, 
        iconHeight, 
        borderRadius
    } = {...styleProps}

    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: backgroundColor,
            width: width || 50,
            height: height || 50,
            borderRadius: borderRadius || 10
        },
        icon: {
            width: iconWidth || 30,
            height: iconHeight || 30,
        }
    })
}


export default setStyle
