"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EvidenciasaprendizajeSchema extends Schema {
  up() {
    this.create("evidenciasaprendizajes", (table) => {
      table.increments("id").primary();
      table
        .enu("nombre", [
          "Examen",
          "Ejercicio",
          "Proyecto",
          "Exposición",
          "Otro",
        ])
        .notNullable()
        .defaultTo("Examen");
      table.specificType("ponderacion", "TINYINT").notNullable().defaultTo("0");
      table
        .enu("evaluacion_formativa", [
          "Lista de cotejo",
          "Lista de observación",
          "Rubrica",
        ])
        .notNullable()
        .defaultTo("Lista de Cotejo");
      table.integer("id_instrumento_evaluacion").unsigned();
      table
        .integer("id_indicador")
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
