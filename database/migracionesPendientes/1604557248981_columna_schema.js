'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// Va instrumentos

class ColumnaSchema extends Schema {
  up () {
    this.create('columnas', (table) => {
      table.increments('id').primary().unsigned()
      table.string('titulo', 20).notNullable()
      table.integer('titulo', 20).notNullable()
      table.integer('num_columna').notNullable()
      table.integer('id_instrumento').notNullable().references('id').inTable('instrumentos')
      table.timestamps()
    })
  }

  down () {
    this.drop('columnas')
  }
}

module.exports = ColumnaSchema
