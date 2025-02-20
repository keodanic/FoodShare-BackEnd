import type { HttpContext } from '@adonisjs/core/http'
import { createSessionValidator } from '#validators/session' 
import Vulnerable from '#models/vulnerable'

export default class SessionController {
  async store({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(createSessionValidator)
    const vulnerable = await Vulnerable.verifyCredentials(email, password)
    const accessToken = await Vulnerable.accessTokens.create(vulnerable)

    return {
      token: accessToken,
      id: vulnerable.id,
      name: vulnerable.name,
      email: vulnerable.email,
    }
  }

  async destroy({ auth, response }: HttpContext) {
    const vulnerable = auth.user!
    await Vulnerable.accessTokens.delete(vulnerable, vulnerable.currentAccessToken.identifier)
    return response.status(203)
  }
}