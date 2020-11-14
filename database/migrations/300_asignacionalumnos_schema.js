'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AsignacionalumnosSchema extends Schema {
  up () {
    this.create('asignacionalumnos', (table) => {
      table.increments("id").primary();
      table.integer("id_asignacion").unsigned().notNullable();
      table.integer("id_alumno").unsigned().notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('asignacionalumnos')
  }
}

module.exports = AsignacionalumnosSchema
