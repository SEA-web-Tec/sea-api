"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ReactivosSchema extends Schema {
  up() {
    this.create("reactivos", (table) => {
      table.increments("id").primary();
      table.integer("id_maestro").notNullable().unsigned();
      table.integer("id_materia").notNullable().unsigned();
      table.integer("unidad").notNullable().unsigned();
      table
        .enu("tipo", [
          "abierto",
          "opcion_multiple",
          "falso_verdadero",
        ])
        .notNullable()
        .defaultTo("abierto");
      table.text("texto_reactivo").notNullable();
      table.text("respuesta_correcta").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("reactivos");
  }
}

module.exports = ReactivosSchema;
