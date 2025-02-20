import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Donation from './donation.js'
import { type HasMany } from '@adonisjs/lucid/types/relations'

export default class Donor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare cnpj: string

  @column()
  declare email: string

  @column()
  declare responsible: string

  @column()
  declare password: string

  @column()
  declare latitude: number

  @column()
  declare longitude: number

  @column()
  declare local: string

  @hasMany(() => Donation)
  declare donations: HasMany<typeof Donation>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
