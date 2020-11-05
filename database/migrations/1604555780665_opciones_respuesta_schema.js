"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
//va antes reactivos
class OpcionesRespuestaSchema extends Schema {
  up() {
    this.create("opciones_respuesta", (table) => {
      table.increments("id");
      table.integer("id_reactivo").unsigned();
      table.text("texto_opcion").unsigned();
      table.boolean("es_correcta").nullable().defaultTo(null);
      table.string("identificador", 2).nullable().defaultTo(null);
      table.index("id_reactivo").references("id_reactivo").inTable("reactivos");
      table.timestamps();
    });
  }

  down() {
    this.drop("opciones_respuesta");
  }
}

module.exports = OpcionesRespuestaSchema;
