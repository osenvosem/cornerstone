import handler from 'feathers-errors/handler'

export default function () {
  const app = this

  app.use(handler())
}
