"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IndicadorponderacionSchema extends Schema {
  up() {
    this.create("indicadorponderacions", (table) => {
      table
        .integer("id_evi")
        .unsigned()
        //.references("id")
        //.inTable("evidenciasaprendizaje");
      table.specificType("A", "TINYINT").nullable();
      table.specificType("B", "TINYINT").nullable();
      table.specificType("C", "TINYINT").nullable();
      table.specificType("D", "TINYINT").nullable();
      table.specificType("E", "TINYINT").nullable();
      table.specificType("F", "TINYINT").nullable();
      table.specificType("G", "TINYINT").nullable();
      table.specificType("H", "TINYINT").nullable();
      table.specificType("I", "TINYINT").nullable();
      table.specificType("J", "TINYINT").nullable();
      table.specificType("K", "TINYINT").nullable();
      table.specificType("L", "TINYINT").nullable();
      table.specificType("M", "TINYINT").nullable();
      table.specificType("N", "TINYINT").nullable();
      table.specificType("O", "TINYINT").nullable();
      table.specificType("P", "TINYINT").nullable();
      table.specificType("Q", "TINYINT").nullable();
      table.specificType("R", "TINYINT").nullable();
      table.specificType("S", "TINYINT").nullable();
      table.specificType("T", "TINYINT").nullable();
      table.specificType("U", "TINYINT").nullable();
      table.specificType("V", "TINYINT").nullable();
      table.specificType("W", "TINYINT").nullable();
      table.specificType("X", "TINYINT").nullable();
      table.specificType("Y", "TINYINT").nullable();
      table.specificType("Z", "TINYINT").nullable();
      table
        .integer("id_ins")
        .unsigned()
        //.references("id_ins")
        //.inTable("instrumentaciondidacticaunidads");
      table.integer("unidad", 2).notNullable().defaultTo("1");
      /*table.primary("id_evidenciaaprendizaje", "letra", [
        "pk_indicadorponderacions",
      ]);*/
      table.timestamps();
    });
  }

  down() {
    this.drop("indicadorponderacions");
  }
}

module.exports = IndicadorponderacionSchema;
