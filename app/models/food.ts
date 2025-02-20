import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Donation from './donation.js';
import { type BelongsTo } from '@adonisjs/lucid/types/relations';
import Reservation from './reservation.js';

export default class Food extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare expiration_time: Date;

  @column()
  declare quantity: string;

  @column()
  declare status: string;

  @belongsTo(() => Donation)
  declare donation: BelongsTo<typeof Donation>

  @belongsTo(() => Reservation)
  declare reservation: BelongsTo<typeof Reservation>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}