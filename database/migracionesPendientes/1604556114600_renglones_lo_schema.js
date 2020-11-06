"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RenglonesLoSchema extends Schema {
  up() {
    this.create("renglones_lo", (table) => {
      table.increments("id").primary().notNullable().unsigned();
      table.integer("num_renglon").notNullable();
      table
        .integer("id_observacion")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("listas_de_observacion");
      table.text("criterio").notNullable();
      table.integer("ponderacion").notNullable().unsigned();
      table.index("id_observacion").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("renglones_lo");
  }
}

module.exports = RenglonesLoSchema;
