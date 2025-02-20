import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Donor from './donor.js'
import Food from './food.js'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Donation extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare donorId: string

  @column()
  declare foodId: string

  @column()
  declare quantityDonated: number

  @column.dateTime()
  declare dateDonation: DateTime

  @belongsTo(() => Donor)
  declare donor: BelongsTo<typeof Donor>

  @belongsTo(() => Food)
  declare food: BelongsTo<typeof Food>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
