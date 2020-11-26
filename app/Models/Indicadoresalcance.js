'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Indicadoresalcance extends Model {
  evidenciasaprendizaje() {
    return this.belongsTo("App/Models/evidenciasaprendizaje");
  }
}

module.exports = Indicadoresalcance
