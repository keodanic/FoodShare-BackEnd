import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reservations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .increments('vulnerable_id')
        .references('id')
        .inTable('vulnerables')
        .notNullable()
        .onDelete('CASCADE')
      table
        .increments('food_id')
        .references('id')
        .inTable('foods')
        .notNullable()
        .onDelete('CASCADE')
      table
        .increments('token_id')
        .references('id')
        .inTable('tokens')
        .notNullable()
        .onDelete('CASCADE')
      table.enum('status', ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED']).defaultTo('PENDING')
      table.timestamp('pickup_date')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
