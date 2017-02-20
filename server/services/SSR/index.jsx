import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { styleSheet } from 'styled-components'
import Root from '../../../app/Root.jsx'


function configureSSR() {
  const app = this

  app.get('*', (req, res) => {

    const renderLayout = (html, css, state = {}) => {
      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>My lovely app</title>
          <style type="text/css">${css}</style>
        </head>
        <body>
          <div id="root">${html}</div>

          <script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
          <script src="/assets/${app.get('jsPath')}/manifest.bundle.js"></script>
          <script src="/assets/${app.get('jsPath')}/vendor.bundle.js"></script>
          <script src="/assets/${app.get('jsPath')}/main.bundle.js"></script>
        </body>
        </html>
      `
    }

    const context = {}
    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
        <Root />
      </StaticRouter>
    )
    const css = styleSheet.getCSS()

    if (context.url) {
      return res.redirect(302, context.url)
    } else {
      return res.send(renderLayout(html, css))
    }
  }) 
}

export default configureSSR
