"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RenglonesLoSchema extends Schema {
  up() {
    this.create("renglones_lo", (table) => {
      table.increments("id").primary().notNullable().unsigned();
      table.specificType("numrenglon", "TINYINT").notNullable();
      table.integer("id_observacion").notNullable().unsigned();
      table.text("criterio").notNullable();
      table.integer("puntos").notNullable().unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("renglones_lo");
  }
}

module.exports = RenglonesLoSchema;
