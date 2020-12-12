"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IntentosSchema extends Schema {
  up() {
    this.create("intentos", (table) => {
      table.increments("id").primary();
      table
        .integer("id_asignacionalumno")
        .unsigned()
        .notNullable();
      table.specificType("num_intento", "TINYINT").notNullable();
      table.decimal("calificacion", [5], [2]);
      table.timestamps();
    });
  }

  down() {
    this.drop("intentos");
  }
}

module.exports = IntentosSchema;
