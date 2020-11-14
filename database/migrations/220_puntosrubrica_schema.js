'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PuntosrubricaSchema extends Schema {
  up () {
    this.create('puntosrubricas', (table) => {
      table.integer("id_renglonrubrica").notNullable().unsigned();
      table.integer("id_evaluacionevidencia").notNullable().unsigned();
      table.specificType("columna", "TINYINT").notNullable();
      table.specificType("puntos", "TINYINT").notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('puntosrubricas')
  }
}

module.exports = PuntosrubricaSchema
