import React from 'react'
import { useMemo } from 'react'
import setStyle from './styles/IconButton.style.js'
import { TouchableHighlight, Image } from 'react-native'
import { i_menu, i_addList, i_completed, i_edit, i_delete } from '../../assets/icon'

export default function IconButton({id, underlayColor, iconSource, onPress, ...styleProps }) {
  const styleIconButton = useMemo(() => setStyle({...styleProps}), [{...styleProps}])

  return (
    <TouchableHighlight 
      style={styleIconButton.container}
      underlayColor={underlayColor || 'rgb(201, 220, 238)'}
      onPress={onPress}
    >
      {iconSource!==null ?
        <Image 
          style={styleIconButton.icon}
          source={iconSource}
        />:
        <></>
      }
    </TouchableHighlight>
  )
}
