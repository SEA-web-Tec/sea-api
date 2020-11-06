"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RenglonesLcSchema extends Schema {
  up() {
    this.create("renglones_lc", (table) => {
      table.increments("id").primary().notNullable().unsigned();
      table.integer("num_renglon").notNullable().unsigned();
      table
        .integer("id_cotejo")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("listas_de_cotejo");
      table.text("criterio").notNullable();
      table.integer("ponderacion").notNullable().unsigned();
      table.index("id_cotejo").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("renglones_lc");
  }
}

module.exports = RenglonesLcSchema;
