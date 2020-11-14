"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RetroalimentacionesespecificasSchema extends Schema {
  up() {
    this.create("retroalimentacionesespecificas", (table) => {
      table.increments("id").primary();
      table.integer("id_reactivo").unsigned().notNullable();
      table
        .enu("tipo", ["general", "correcta", "incorrecta"])
        .notNullable()
        .defaultTo("general");
      table.text("comentario").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("retroalimentacionesespecificas");
  }
}

module.exports = RetroalimentacionesespecificasSchema;
