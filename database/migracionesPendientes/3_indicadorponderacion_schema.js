'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IndicadorponderacionSchema extends Schema {
  up () {
    this.create('indicadorponderacion', (table) => {
      table.integer('id_evidenciaaprendizaje').unsinged()
      table.string('letra', 1).notNullable().defaultTo('a')
      table.integer('ponderacion', 3).notNullable().defaultTo('0')
      table.primary('id_instrumentaciondidactica', 'letra', ["pk_indicadorponderacion"])
      table.timestamps()
    })
  }

  down () {
    this.drop('indicadorponderacion')
  }
}

module.exports = IndicadorponderacionSchema