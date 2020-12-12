"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IndicadoresalcanceSchema extends Schema {
  up() {
    this.create("indicadoresalcances", (table) => {
      table.increments("id").primary();
      table.string("A", 100).defaultTo(" ");
      table.string("B", 100).defaultTo(" ");
      table.string("C", 100).defaultTo(" ");
      table.string("D", 100).defaultTo(" ");
      table.string("E", 100).defaultTo(" ");
      table.string("F", 100).defaultTo(" ");
      table.string("G", 100).defaultTo(" ");
      table.string("H", 100).defaultTo(" ");
      table.string("I", 100).defaultTo(" ");
      table.string("J", 100).defaultTo(" ");
      table.string("K", 100).defaultTo(" ");
      table.string("L", 100).defaultTo(" ");
      table.string("M", 100).defaultTo(" ");
      table.string("N", 100).defaultTo(" ");
      table.string("O", 100).defaultTo(" ");
      table.string("P", 100).defaultTo(" ");
      table.string("Q", 100).defaultTo(" ");
      table.string("R", 100).defaultTo(" ");
      table.string("S", 100).defaultTo(" ");
      table.string("T", 100).defaultTo(" ");
      table.string("U", 100).defaultTo(" ");
      table.string("V", 100).defaultTo(" ");
      table.string("W", 100).defaultTo(" ");
      table.string("X", 100).defaultTo(" ");
      table.string("Y", 100).defaultTo(" ");
      table.string("Z", 100).defaultTo(" ");
      table
        .integer("id_ins")
        .unsigned()
        .references("id")
        .inTable("instrumentaciondidacticas");
      table.integer("unidad").defaultTo("1");
      table.timestamps();
    });
  }

  down() {
    this.drop("indicadoresalcances");
  }
}

module.exports = IndicadoresalcanceSchema;
