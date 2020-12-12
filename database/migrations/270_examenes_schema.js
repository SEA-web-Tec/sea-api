"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ExamenesSchema extends Schema {
  up() {
    this.create("examenes", (table) => {
      table.increments("id").primary();
      table.integer("id_materia").notNullable().unsigned();
      table.integer("id_maestro").notNullable().unsigned();
      table.text("nombre").notNullable();
      table.specificType("unidad", "TINYINT").notNullable();
      table.text("descripcion").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("examenes");
  }
}

module.exports = ExamenesSchema;
