"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PuntoslcSchema extends Schema {
  up() {
    this.create("puntoslcs", (table) => {
      table.integer("id_renglonlc").notNullable().unsigned();
      table.integer("id_evaluacionevidencia").notNullable().unsigned();
      table.enu("satisface", ["s", "n"]).notNullable().defaultTo("s");
      table.specificType("puntos", "TINYINT").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("puntoslcs");
  }
}

module.exports = PuntoslcSchema;
