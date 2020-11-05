'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// Va antes instrumentos

class RenglonesSchema extends Schema {
  up () {
    this.create('renglones', (table) => {
      table.increments('id').primary().unsigned()
      table.string('criterio', 50).notNullable()
      table.integer('num_renglon').notNullable()
      table.integer('id_instrumento').notNullable().unsigned().references('id').inTable('instrumentos')

      table.index('id_instrumento').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('renglones')
  }
}

module.exports = RenglonesSchema
