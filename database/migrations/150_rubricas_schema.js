"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RubricasSchema extends Schema {
  up() {
    this.create("rubricas", (table) => {
      table.increments("id").primary().unsigned();
      table.string("nombre", 80).notNullable();
      table.text("descripcion").notNullable();
      table.integer("id_usuario").notNullable();
      table.integer("id_carpeta").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("rubricas");
  }
}

module.exports = RubricasSchema;
