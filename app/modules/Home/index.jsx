import React from 'react'
import styled, { css, keyframes, ThemeProvider, injectGlobal, withTheme } from 'styled-components'

export default function Home() {
  return (
    <div>
      <Button >Press me slowly</Button>
    </div>
  )
}

const Button = styled.button`
  padding: 1em 2em;
  border: 1px solid ${props => props.theme.secondary};
  background: ${props => props.theme.main};
  color: ${props => props.theme.tertiary};
`

