"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RespuestasalumnoSchema extends Schema {
  up() {
    this.create("respuestasalumnos", (table) => {
      table.increments("id").primary();
      table.integer("id_reactivo").unsigned().notNullable();
      table.integer("id_intento").unsigned().notNullable();
      table.text("respuesta_alumno").notNullable();
      table.decimal("puntaje", [4], [2]);
      table.timestamps();
    });
  }

  down() {
    this.drop("respuestasalumnos");
  }
}

module.exports = RespuestasalumnoSchema;
