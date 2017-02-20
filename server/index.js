import path from 'path'
import feathers from 'feathers'
import favicon from 'serve-favicon'
import compress from 'compression'
import configuration from 'feathers-configuration'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'
import bodyParser from 'body-parser'
import socketio from 'feathers-socketio'
import middleware from './middleware'
import services from './services'
import _ from 'lodash'

const app = feathers()

app.configure(configuration(path.resolve(__dirname, '..')))

app.use(compress())
  .use(favicon(path.join(app.get('publicDir'), 'favicon.ico')))
  .use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
  .use(app.get('publicPath'), feathers.static(path.join(app.get('publicDir'), 'assets')))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware)

app.listen(3000)

export default app
