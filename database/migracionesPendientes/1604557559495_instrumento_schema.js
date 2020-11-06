'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// Va antes carpetas

class InstrumentoSchema extends Schema {
  up () {
    this.create('instrumentos', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre', 80).notNullable()
      table.integer('id_usuario').notNullable().unsigned().references('id').inTable('usuarios')
      table.integer('id_carpeta').nullable().unsigned().defaultTo(null).reference('id').inTable('carpetas')
      table.enu('tipo', ['Rubrica', 'Lista de Observacion', 'Lista de Cotejo']).notNullable()
      table.datetime('fecha_creacion').notNullable()
      table.datetime('fecha_modificacion').nullable().defaultTo(null)
      table.integer('vista_previa').notNullable().defaultTo(0)
      table.integer('tiene_observaciones').notNullable().defaultTo(1)
      table.integer('tiene_comentario_final').notNullable().defaultTo(0)

      table.index('id_carpeta')


      table.timestamps()
    })
  }

  down () {
    this.drop('instrumentos')
  }
}

module.exports = InstrumentoSchema
