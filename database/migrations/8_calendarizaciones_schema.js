'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CalendarizacionesSchema extends Schema {
  up () {
    this.create('calendarizaciones', (table) => {
      table.integer('id_evidencia_aprendizaje').notNullable().primary()
      table.string('instrucciones').notNullable()
      table.boolean('es_por_equipo').notNullable()
      table.datetime('fecha_subida1ra').notNullable()
      table.datetime('fecha_subida2da').notNullable()
      table.datetime('fecha_limite1ra').notNullable()
      table.datetime('fecha_limite2da').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('calendarizaciones')
  }
}

module.exports = CalendarizacionesSchema