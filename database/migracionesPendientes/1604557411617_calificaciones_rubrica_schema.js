"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CalificacionesRubricaSchema extends Schema {
  up() {
    this.create("calificaciones_rubricas", (table) => {
      table.integer("id_celda").unsigned().notNullable();
      table.integer("id_evaluacion_evidencia").notNullable();
      table.tinyInteger("puntos").unsigned().notNullable();
      table.timestamps();
      table.primary(["id_celda", "id_evaluacion_evidencia"]);
    });
  }

  down() {
    this.drop("calificaciones_rubricas");
  }
}

module.exports = CalificacionesRubricaSchema;
