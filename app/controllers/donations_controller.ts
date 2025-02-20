import Donation from '#models/donation'
import { createDonationsValidator } from '#validators/donation'
import type { HttpContext } from '@adonisjs/core/http'

export default class DonationsController {
  async index({}: HttpContext) {
    const donation = await Donation.query()
    return donation
  }

  async create({ request, response }: HttpContext) {
    try {
      const { donor_id, food_id, quantity_donated } =
        await request.validateUsing(createDonationsValidator)

      const donation = await Donation.create({
        donor_id,
        food_id,
        quantity_donated,
      })

      return donation
    } catch (error) {
      return response.status(400).json({
        message: 'Doação inválida',
        error,
      })
    }
  }

  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
