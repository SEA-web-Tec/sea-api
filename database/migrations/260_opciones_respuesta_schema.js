"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
//va antes reactivos
class OpcionesRespuestaSchema extends Schema {
  up() {
    this.create("opciones_respuesta", (table) => {
      table.increments("id").primary();
      table.integer("id_reactivo").notNullable().unsigned();
      table.text("texto_opcion").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("opciones_respuesta");
  }
}

module.exports = OpcionesRespuestaSchema;
