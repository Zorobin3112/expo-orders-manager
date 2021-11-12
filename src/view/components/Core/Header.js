import React from 'react'
import { useMemo } from 'react'
import setStyle from './styles/Header.style.js'
import Section from './Section'

export default function Header({backgroundColor, borderRadius,leftContent, centerContent, rightContent}) {
  const styleHeader = useMemo(() => {
    return setStyle(backgroundColor, borderRadius)
  }, [backgroundColor, borderRadius])
  
  return (
    <Section style={styleHeader.container}>
      <Section style={styleHeader.leftSection}>
        {leftContent}
      </Section>
      <Section style={styleHeader.centerSection}>
        {centerContent}
      </Section>
      <Section style={styleHeader.rightSection}>
        {rightContent}
      </Section>
    </Section>
  )
}
