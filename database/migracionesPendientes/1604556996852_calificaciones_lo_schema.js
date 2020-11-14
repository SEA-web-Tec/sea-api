"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CalificacionesLoSchema extends Schema {
  up() {
    this.create("calificaciones_lo", (table) => {
      table
        .integer("id_renglon_lo")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("renglones_lo");
      table
        .integer("id_evaluacion_evidencia")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("evaluaciones_evidencia");
      table.integer("ponderacion").unsigned().notNullable();
      table.text("observaciones").nullable().defaultTo(null);
      table.timestamps();

      table.primary(["id_renglon_lo", "id_evaluacion_evidencia"]);
    });
  }

  down() {
    this.drop("calificaciones_lo");
  }
}

module.exports = CalificacionesLoSchema;
