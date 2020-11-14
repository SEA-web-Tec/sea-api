"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArchivostareaSchema extends Schema {
  up() {
    this.create("archivostarea", (table) => {
      table.increments("id").notNullable().primary();
      table.integer("id_evidencia_aprendizaje").notNullable().unsigned();
      table.string("nombre_archivo", 200).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("archivostarea");
  }
}

module.exports = ArchivostareaSchema;
