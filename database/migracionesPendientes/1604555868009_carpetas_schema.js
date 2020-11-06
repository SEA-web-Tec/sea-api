'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// Va antes usuarios
// Va antes carpeta padre

class CarpetasSchema extends Schema {
  up () {
    this.create('carpetas', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre', 80).notNullable()
      table.integer('id_usuario').notNullable().unsigned().references('id').inTable('usuarios')
      table.integer('id_carpeta_padre').notNullable().unsigned().references('id').inTable('carpetas_padres')
      table.datetime('fecha_creacion').notNullable()
      table.datetime('fecha_modificacion').notNullable()

      table.index('id_carpeta_padre').notNullable()
      
      table.timestamps()
    })
  }

  down () {
    this.drop('carpetas')
  }
}

module.exports = CarpetasSchema
