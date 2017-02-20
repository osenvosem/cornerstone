import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Main from './modules/Main/'
import theme from './theme'

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}
