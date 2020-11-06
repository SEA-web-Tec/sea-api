'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReactivosSchema extends Schema {
  up () {
    this.create('reactivos', (table) => {
      table.integer('id' , 11).primary()
      table.integer('id_maestro', 11).notNullable().unsigned().references('id').inTable('usuario')
      table.integer('id_materia', 11).notNullable().unsigned().references('id').inTable('materia')
      table.string('tema', 50).notNullable()
      table.enu('tipo', ['abierto', 'opcion_multiple', 'falso_verdadero', 'relacional', 'complemento']).notNullable()
      table.text('texto_reactivo').notNullable()
      table.text('respuesta_correcta').notNullable()
      table.datetime('fecha_creacion').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reactivos')
  }
}

module.exports = ReactivosSchema
