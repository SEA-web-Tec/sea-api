'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Evidenciasaprendizaje extends Model {
  Instrumentaciondidacticaunidad() {
    return this.belongsTo("App/Models/Instrumentaciondidacticaunidad");
  }

  Indicadorponderacion() {
    return this.hasMany("App/Models/Indicadorponderacion");
  }
}

module.exports = Evidenciasaprendizaje