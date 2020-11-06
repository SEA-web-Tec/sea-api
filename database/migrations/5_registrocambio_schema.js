'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistrocambioSchema extends Schema {
  up () {
    this.create('registrocambio', (table) => {
      table.datetime('fecha').notNullable()
      table.integer('id_instrumentaciondidactica').notNullable().unsigned()
      table.primary('fecha', 'id_instrumentaciondidactica', ["pk_registrocambio"])
      table.timestamps()
    })
  }

  down () {
    this.drop('registrocambio')
  }
}

module.exports = RegistrocambioSchema