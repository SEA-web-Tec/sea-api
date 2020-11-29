'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GrupoSchema extends Schema {
  up () {
    this.create('grupos', (table) => {
      table.increments('id').primary()
      table.integer('materia_id').notNullable()
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios')
      table.string('grupo', 1).notNullable()
      table.integer('anio', 11).notNullable().defaultTo(0)
      table.integer('periodo', 11).notNullable().defaultTo(0)
      table.enu('gestion_del_curso', ['abierta', 'entregada', 'aprobada']).notNullable().defaultTo('abierta')
      table.integer('id_intrumentaciondidactica').unsigned().nullable()
      table
        .integer("id_profesor_evaluador")
        .unsigned()
        .references("id")
        .inTable("usuarios");
      table.datetime('fecha_cambio').notNullable()      
      table.timestamps()
    })
  }

  down () {
    this.drop('grupos')
  }
}

module.exports = GrupoSchema
