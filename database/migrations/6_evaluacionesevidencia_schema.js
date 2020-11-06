'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvaluacionesevidenciaSchema extends Schema {
  up () {
    this.create('evaluacionesevidencia', (table) => {
      table.integer('id').notNullable().unsigned().primary()
      table.integer('id_evidencia_aprendizaje').notNullable().unsigned().references('id').inTable('evidenciasaprendizaje')
      table.string('id_alumno' , 10).notNullable().references('id').inTable('alumno')
      table.integer('oportunidad').notNullable().default('0');
      table.integer('calificacion').notNullable().default('0');
      table.integer('observaciones').notNullable()
      //indexes
      table.index('id_evidencia_aprendizaje')
      table.timestamps()
    })
  }

  down () {
    this.drop('evaluacionesevidencia')
  }
}

module.exports = EvaluacionesevidenciaSchema