"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InstrumentaciondidacticaSchema extends Schema {
  up() {
    this.create("instrumentaciondidacticas", (table) => {
      table.increments("id");
      table.integer("id_temario").notNullable().defaultTo(0);
      table.integer("id_usuario").notNullable().defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("instrumentaciondidacticas");
  }
}

module.exports = InstrumentaciondidacticaSchema;
