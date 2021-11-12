const fs = require('fs')
const path = require('path')

const componentFolder = `./src/view/components/${process.argv[2]}`
const componentName = process.argv[3]
const camelCaseName = componentName.charAt(0).toLowerCase() + componentName.slice(1)



//Create Folder
fs.mkdirSync(componentFolder, { recursive: true }, 
    (err) => {
        if (err) throw err
    }
);

fs.mkdirSync(componentFolder+'/styles', { recursive: true }, 
    (err) => {
        if (err) throw err
    }
);

//Create components file
const componentJsData = 
`import React from 'react'
import { useMemo } from 'react'
import setStyle from './styles/${componentName}.style.js'
import { View } from 'react-native'

export default function ${componentName}({...styleProps}) {
    const style${componentName} = useMemo(() => setStyle({...styleProps}), [{...styleProps}])
    
    return (
        <View style={style${componentName}.container}>

        </View>
  )
}
`

fs.writeFileSync(componentFolder +`/${componentName}.js`, componentJsData, 
    (err) => {
        if (err) throw err
    }
)

//Create style file
const componentStyleData = 
`import { StyleSheet } from 'react-native'

const setStyle = ({...styleProps}) => {
    const {
        //get style props from here
    } = {...styleProps}

    return StyleSheet.create({
        container: {
            
        },
        
    })
}

export default setStyle
`

fs.writeFileSync(componentFolder +`/styles/${componentName}.style.js`, componentStyleData, 
    (err) => {
        if (err) throw err
    }
)