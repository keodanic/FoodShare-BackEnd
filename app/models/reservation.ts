import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { type HasMany } from '@adonisjs/lucid/types/relations'
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

  @hasMany(() => Food)
  declare food_id: HasMany<typeof Food>

  @hasMany(() => Token)
  declare token_id: HasMany<typeof Token>

  @hasMany(() => Vulnerable)
  declare vulnerable_id: HasMany<typeof Vulnerable>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}