import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Reservation from './reservation.js'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Token extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare token: string

  @column()
  declare used: boolean

  @belongsTo(() => Reservation)
  declare reservation: BelongsTo<typeof Reservation>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}