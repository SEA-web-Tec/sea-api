"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InstrumentaciondidacticaSchema extends Schema {
  up() {
    this.create("instrumentaciondidacticas", (table) => {
      table.increments("id");
      table.integer("grupo_id").unsigned().references("id").inTable("grupos");
      table
        .integer("usuario_id")
        .unsigned()
        .references("id")
        .inTable("usuarios");
      table.timestamps();
    });
  }

  down() {
    this.drop("instrumentaciondidacticas");
  }
}

module.exports = InstrumentaciondidacticaSchema;
