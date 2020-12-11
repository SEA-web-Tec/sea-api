"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GrupoSchema extends Schema {
  up() {
    this.create("grupos", (table) => {
      table.increments("id").primary();
      table.integer("materia_id").notNullable();
      table
        .integer("usuario_id")
        .unsigned()
        .references("id")
        .inTable("usuarios");
      table.string("grupo", 1).notNullable();
      table..specificType('anio', 'year').notNullable().defaultTo(0);
      table.integer("periodo", 11).notNullable().defaultTo(0);
      table.text("fotoPortada", "longtext").nullable().defaultTo(null);
      table.timestamps();
    });
  }

  down() {
    this.drop("grupos");
  }
}

module.exports = GrupoSchema;
