import mongoose from 'mongoose'
import SSR from './SSR/'

export default function () {
  const app = this

  mongoose.connect(app.get('mongodb'))
  mongoose.Promise = global.Promise

  app.configure(SSR) // always must be last one
}
