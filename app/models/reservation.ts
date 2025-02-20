import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import Token from './token.js'
import Food from './food.js'
import Vulnerable from './vulnerable.js'

export default class Reservation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare status: string

  @column()
  declare pickup_date: string

  @belongsTo(() => Vulnerable)
  declare vulnerable: BelongsTo<typeof Vulnerable>

  @belongsTo(() => Food)
  declare food: BelongsTo<typeof Food>

  @belongsTo(() => Token)
  declare token: BelongsTo<typeof Token>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
