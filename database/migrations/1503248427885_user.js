'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('usuario', (table) => {
      table.increments()
      table.string('ncontrol', 8).notNullable().unique()
      table.string('correo', 254).notNullable().unique()
      table.integer('user_type').notNullable()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuario')
  }
}

module.exports = UserSchema
