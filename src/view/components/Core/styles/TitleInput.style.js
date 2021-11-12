import { StyleSheet } from 'react-native'

const setStyle = ({editable, ...styleProps}) => {
    const {
        width,
        height,
        flex
    } = {...styleProps}

    return StyleSheet.create({
        container: {
            flex: flex,
            marginHorizontal: 2,
        },
        title: {
            alignSelf: 'flex-start',
            color: '#444',
            fontSize: 13,
            marginLeft: 8,
            backgroundColor: 'rgb(255, 255, 255)',
            zIndex: 1
        },
        input: {
            fontSize: 16,
            color: 'blue',
            width: width,
            height: height || 32,
            marginTop: -8,
            marginBottom: 2,
            borderWidth: editable? 2: 1,
            borderRadius: 5,
            borderColor: editable? 'red': null,
            paddingHorizontal: 10,
            paddingBottom: 2,
            paddingTop: 8,
        }
    })
}

export default setStyle

