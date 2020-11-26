'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Instrumentaciondidacticaunidad extends Model {
  Instrumentaciondidactica() {
    return this.belongsTo("App/Models/Instrumentaciondidactica");
  }

  Evidenciasaprendizaje() {
    return this.hasMany("App/Models/Evidenciasaprendizaje");
  }
}

module.exports = Instrumentaciondidacticaunidad
