"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EvidenciasaprendizajeSchema extends Schema {
  up() {
    this.create("evidenciasaprendizajes", (table) => {
      table.increments("id").primary();
      table.string("nombre", 50).notNullable();
      table.specificType("ponderacion", "TINYINT").notNullable().defaultTo("0");
      table
        .enu("evaluacion_formativa", [
          "Examen",
          "Lista de Cotejo",
          "Lista de Observación",
          "Rubrica",
          "Otros",
        ])
        .notNullable()
        .defaultTo("Otros");
      table
        .integer("id_instrumento_evaluacion")
        .unsigned()
        .references("id")
        .inTable("indicadoresalcances");
      table
        .integer("id_ins")
        .unsigned()
        .references("id_ins")
        .inTable("instrumentaciondidacticaunidads");
      table.integer("unidad", 2).notNullable().defaultTo("1");
      table.timestamps();
    });
  }

  down() {
    this.drop("evidenciasaprendizajes");
  }
}

module.exports = EvidenciasaprendizajeSchema;
