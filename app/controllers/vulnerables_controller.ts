import type { HttpContext } from '@adonisjs/core/http'
import Vulnerable from '#models/vulnerable'
import { createVunerableValidator, updateVunerableValidator } from '#validators/vulnerable'

export default class VulnerablesController {
  async index() {
    const vulnerables = await Vulnerable.query().preload('reservations')
    return vulnerables
  }

  async store({ request }: HttpContext) {
    const { name, email, password, cpf } = await request.validateUsing(createVunerableValidator)
    const vulnerable = await Vulnerable.create({ name, email, password, cpf })
    return vulnerable
  }

  async show({ params, response }: HttpContext) {
    try {
      const vulnerable = await Vulnerable.findByOrFail('id', params.id)
      await vulnerable.load('objects')
      return vulnerable
    } catch (error) {
      return response.status(404).json({ message: 'Vulnerable not found' })
    }
  }

  async update({ params, request }: HttpContext) {
    const vulnerable = await Vulnerable.findBy('id', params.id)
    const { name, password } = await request.validateUsing(updateVunerableValidator)
    vulnerable!.merge({ name, password })
    await vulnerable!.save()
    return vulnerable
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const vulnerable = await Vulnerable.findByOrFail('id', params.id)
      await vulnerable.delete()
      return response.status(203)
    } catch (error) {
      return response.status(404).json({ message: 'Vulnerable not found' })
    }
  }
}
