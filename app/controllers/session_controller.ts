import type { HttpContext } from '@adonisjs/core/http'
import { createSessionValidator } from '#validators/vulnerable'
import Vulnerable from '#models/vulnerable'

export default class SessionController {
  async store({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(createSessionValidator)
    const user = await Vulnerable.verifyCredentials(email, password)
    const accessToken = await Vulnerable.accessTokens.create(user)

    return {
      token: accessToken,
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }

  async destroy({ auth, response }: HttpContext) {
    const user = auth.user!
    await Vulnerable.accessTokens.delete(user, user.currentAccessToken.identifier)
    return response.status(203)
  }
}