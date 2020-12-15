"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ContenidoexamenesSchema extends Schema {
  up() {
    this.create("contenidoexamenes", (table) => {
      table.increments("id").primary();
      table.integer("id_reactivo").unsigned().notNullable();
      table.integer("id_examen").unsigned().notNullable();
      table.float("valor_reactivo", 5, 2);
      table.timestamps();
    });
  }

  down() {
    this.drop("contenidoexamenes");
  }
}

module.exports = ContenidoexamenesSchema;
