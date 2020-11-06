'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// Va antes renglones
// Va columnas

class CeldaSchema extends Schema {
  up () {
    this.create('celdas', (table) => {
      table.increments('id').primary().unsigned()
      table.text('texto').notNullable()
      table.integer('id_renglon').notNullable().unsigned().references('id').inTable('renglones')
      table.integer('id_columna').notNullable().unsigned().references('id').inTable('columnas')
      table.integer('puntos_maximos').notNullable()

      table.index('id_columna')
      table.index('id_renglon')

      table.timestamps()
    })
  }

  down () {
    this.drop('celdas')
  }
}

module.exports = CeldaSchema
