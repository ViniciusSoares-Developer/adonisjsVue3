import User from '#models/user'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class PostPolicy extends BasePolicy {
  // before(user: User | null) {
  //   console.log('antes: ', user)
  // }

  // after(user: User | null) {
  //   console.log('depois: ', user)
  // }

  create(user: User, data: { name: string }): AuthorizerResponse {
    return user?.fullName === data.name
  }
}
