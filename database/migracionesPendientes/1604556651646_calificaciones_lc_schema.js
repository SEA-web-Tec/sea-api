"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CalificacionesLcSchema extends Schema {
  up() {
    this.create("calificaciones_lc", (table) => {
      table
        .integer("id_renglon_lc")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("renglones_lc");
      table
        .integer("id_evaluacion_evidencia")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("evaluaciones_evidencia");
      table.boolean("satisface").defaultTo("0");
      table.timestamps();

      $table.primary(["id_renglon_lc", "id_evaluacion_evidencia"]);
    });
  }

  down() {
    this.drop("calificaciones_lc");
  }
}

module.exports = CalificacionesLcSchema;
