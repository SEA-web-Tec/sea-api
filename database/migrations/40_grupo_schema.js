'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GrupoSchema extends Schema {
  up () {
    this.create('grupos', (table) => {
      table.increments().primary()
      table.string('materia', 100).notNullable().references('nombre').inTable('materias')
      table.string('maestro').notNullable()
      table.string('grupo', 1).notNullable()
      table.integer('anio', 11).notNullable().defaultTo(0)
      table.integer('periodo', 11).notNullable().defaultTo(0)
      table.enu('gestion_del_curso', ['abierta', 'entregada', 'aprobada']).notNullable().defaultTo('abierta')
      table.integer('id_intrumentaciondidactica').unsigned().notNullable()
      table.integer('id_profesor_evaluador').unsigned().notNullable()
      table.datetime('fecha_cambio').notNullable()

      // table.foreign('maestro').references('Nombre').inTable('usuarios')
      
      table.timestamps()
    })
  }

  down () {
    this.drop('grupos')
  }
}

module.exports = GrupoSchema
