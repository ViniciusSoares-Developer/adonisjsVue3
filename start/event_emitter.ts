import emitter from '@adonisjs/core/services/emitter'
import { HttpContext } from '@adonisjs/core/http'

emitter.on('user:registered', (user) => {
  console.log('user registered', user)
})

emitter.on('teste', (data, ctx: HttpContext) => {
  // const ctx: HttpContext
  console.log(data)
  ctx.session.put('teste', data)
  // ctx.inertia.location('/')
})
