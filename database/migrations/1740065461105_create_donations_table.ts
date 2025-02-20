import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'donations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('donor_id').references('id').inTable('donors').notNullable().onDelete('CASCADE')
      table.uuid('food_id').references('id').inTable('foods').notNullable().onDelete('CASCADE')
      table.integer('quantity_donated').notNullable()
      table.timestamp('date_donation')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
