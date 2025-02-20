import Donor from '#models/donor'
import { createDonorValidator } from '#validators/donor'
import type { HttpContext } from '@adonisjs/core/http'

export default class DonorsController {
  async index({}: HttpContext) {
    const donor = await Donor.query()
    return donor
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { name, cnpj, email, local, password, responsible, latitude, longitude } =
      await request.validateUsing(createDonorValidator)
    const donor = await Donor.create({
      name,
      cnpj,
      email,
      local,
      password,
      responsible,
      latitude,
      longitude,
    })
    return donor
  }

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
  async destroy({ params }: HttpContext) {
    
  }
}
