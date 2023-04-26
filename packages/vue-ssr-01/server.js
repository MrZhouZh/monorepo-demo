import express from 'express'
import { createApp } from './app.js'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.get('/', (req, res) => {
  const app = createApp()

  renderToString(app).then(html => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vue SSR Example</title>
      <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@3.2.36/dist/vue.esm-browser.js"
        }
      }
      </script>
      <script type="module" src="/client.js"></script>
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
    </html>`)
  })
})

server.use(express.static('.'))

server.listen(3000, () => {
  console.log(`server is running at http://localhost:3000`)
})
