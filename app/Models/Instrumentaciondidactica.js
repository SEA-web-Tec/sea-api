"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Instrumentaciondidactica extends Model {
  grupo() {
    return this.belongsTo("App/Models/Grupo");
  }
  usuario() {
    return this.belongsTo("App/Models/Usuario");
  }
  instrumentaciondidacticaunidad() {
    return this.hasMany("App/Models/Instrumentaciondidacticaunidad");
  }
}

module.exports = Instrumentaciondidactica;
