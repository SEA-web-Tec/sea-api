"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RetroalimentacionesglobalesSchema extends Schema {
  up() {
    this.create("retroalimentacionesglobales", (table) => {
      table.increments("id").primary();
      table.integer("id_examen").unsigned().notNullable();
      table.integer("limite_calificacion", 3).notNullable();
      table.text("comentario").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("retroalimentacionesglobales");
  }
}

module.exports = RetroalimentacionesglobalesSchema;
