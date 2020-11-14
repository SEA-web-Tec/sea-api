"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IntentosSchema extends Schema {
  up() {
    this.create("intentos", (table) => {
      table.increments("id").primary();
      table
        .integer("id_asigid_asignacionalumnonacion")
        .unsigned()
        .notNullable();
      table.specificType("num_intento", "TINYINT").notNullable();
      table
        .enu("estado", ["finalizado", "en progreso", "nunca enviado"])
        .notNullable()
        .defaultTo("finalizado");
      table.datetime("inicio").notNullable();
      table.datetime("fin").notNullable();
      table.decimal("decimal", [5], [2]);
      table.timestamps();
    });
  }

  down() {
    this.drop("intentos");
  }
}

module.exports = IntentosSchema;
