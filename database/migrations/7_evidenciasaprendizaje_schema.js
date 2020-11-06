'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvidenciasaprendizajeSchema extends Schema {
  up () {
    this.create('evidenciasaprendizaje', (table) => {
      table.integer('id').primary()
      table.string('nombre', 50).notNullable()
      table.integer('ponderacion', 3).notNullable().default('0')
      table.enu('evaluacion_formativa', ['Examen', 'Lista de Cotejo', 'Lista de Observación', 'Rubrica', 'Otros']).notNullable().default('Otros')
      table.integer('id_instrumento_evaluacion').notNullable().unsigned().default(NULL).references('id_instrumentaciondidactica').inTable('instrumentosevaluacion')
      table.integer('id_instrumentaciondidactica').notNullable().unsigned()
      table.integer('unidad' , 2).notNullable().default('1')
      table.primary('id_instrumentaciondidactica', 'unidad', ["fk_evidenciaaprendizaje_instrumentaciondidacticaunidad"])
      //indexes
      table.index('id_instrumentaciondidactica').notNullable()
      table.index('unidad').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('evidenciasaprendizaje')
  }
}

module.exports = EvidenciasaprendizajeSchema