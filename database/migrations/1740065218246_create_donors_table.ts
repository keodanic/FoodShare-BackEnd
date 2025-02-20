import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'donors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('cnpj').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('responsible').notNullable()
      table.string('password').notNullable()
      table.float('latitude')
      table.float('longitude')
      table.string('local')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
