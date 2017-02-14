import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Root from '../../../app/Root.jsx'


export default function () {
  const app = this

  const renderLayout = (html, state = {}) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>My lovely app</title>
      </head>
      <body>
        <div id="root"><div>${html}</div></div>

        <script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
        <script src="/assets/manifest.bundle.js"></script>
        <script src="/assets/vendor.bundle.js"></script>
        <script src="/assets/main.bundle.js"></script>
      </body>
      </html>
    `
  }

  app.use('*', (req, res) => {
    const context = {}
    const renderedLayout = renderLayout(
      renderToString(
        <StaticRouter location={req.url} context={context}>
          <Root />
        </StaticRouter>
      ), {}
    )

    if (context.url) {
      return res.redirect(302, context.url)
    } else {
      return res.send(renderedLayout)
    }
  }) 
}
