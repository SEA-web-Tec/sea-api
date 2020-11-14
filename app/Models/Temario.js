'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Temario extends Model {
  materia() {
    return this.hasOne("App/Models/Materia");
  }
}

module.exports = Temario
