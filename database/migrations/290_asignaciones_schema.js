"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AsignacionesSchema extends Schema {
  up() {
    this.create("asignaciones", (table) => {
      table.increments("id").primary();
      table.integer("id_examen").notNullable().unsigned();
      table.integer("id_evaluacion_evidencia").notNullable().unsigned();
      table.datetime("inicio").notNullable();
      table.datetime("fin").notNullable();
      table.specificType("contrasenia", "CHAR");
      table
        .specificType("intentos_permitidos", "TINYINT")
        .notNullable()
        .defaultTo(1);
      table.timestamps();
    });
  }

  down() {
    this.drop("asignaciones");
  }
}

module.exports = AsignacionesSchema;
