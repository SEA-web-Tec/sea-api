'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MateriaSchema extends Schema {
  up () {
    this.create('materias', (table) => {
      table.increments('id').primary()
      table.string('nombre', 100).notNullable()
      table.string('abreviatura', 20).notNullable()
      table.integer('departamento_academico').notNullable().defaultTo(0)
      table.integer('creditos').notNullable().defaultTo(0)
      table.integer('horas_teoria').notNullable().defaultTo(0)
      table.integer('horas_practica').notNullable().defaultTo(0)
      table.integer('semestre').notNullable().defaultTo(1)
      table.integer('plan').notNullable().defaultTo(0)
      table.integer('modulo', 11).notNullable().defaultTo(0)
      table.integer('creditos_requeridos', 11).notNullable().defaultTo(0)
      table.string('objetivo', 1000).notNullable()
      table.bool('captura_temario_activa').notNullable().defaultTo(false)
      table.text('intencion_didactica').notNullable()
      table.text('competencias_especificas').notNullable()
      table.text('competencias_genericas').notNullable()
      table.text('competencias_previas').notNullable()
      table.text('bibliografia').notNullable()

 

      table.timestamps()
    })
  }

  down () {
    this.drop('materias')
  }
}

module.exports = MateriaSchema
