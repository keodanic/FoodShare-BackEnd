import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Donor from './donor.js'
import Food from './food.js'
import { HasMany } from '@adonisjs/lucid/types/relations'

export default class Donation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasMany(() => Donor)
  declare donor_id: HasMany<typeof Donor>

  @hasMany(() => Food)
  declare food_id: HasMany<typeof Food>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}