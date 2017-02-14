import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './app/Root'

const renderRoot = (Component) => {
  render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderRoot(Root)

if (module.hot) {
  module.hot.accept('./app/Root', () => {
    renderRoot(Root)
  })
}

