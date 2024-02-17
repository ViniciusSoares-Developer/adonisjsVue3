import User from '#models/user'
import { accountLoginValidator } from '#validators/main'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'

export default class AccountsController {
  @inject()
  async postCreate(ctx: HttpContext) {
    return ctx.inertia.render('home/teste')
  }

  @inject()
  async postLogin({ request, inertia, auth }: HttpContext) {
    try {
      // console.log(request.body().date)
      const data = await request.validateUsing(accountLoginValidator)
      console.log(data)
      // console.log(data)
      // const user = await User.verifyCredentials(data.email, data.password)
      // await auth.use('web').login(user)
      // return inertia.location('/logado')
    } catch (e) {
      console.log(e)
    }
  }

  @inject()
  async logout(ctx: HttpContext) {
    emitter.emit('teste', 'data')
    // await auth.use('web').logout()
  }

  @inject()
  async bouncerTest({ bouncer, response }: HttpContext) {
    try {
      if (await bouncer.with('PostPolicy').denies('create', { name: '123' }))
        throw { messages: 'Erro na validação' }

      response.status(200).send('Sucesso')
    } catch (e) {
      console.log(e.messages)
      // response.status(401).abort('Error')
      response.status(401).send('Error')
    }
  }
}
