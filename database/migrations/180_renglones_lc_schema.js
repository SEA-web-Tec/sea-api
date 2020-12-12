"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RenglonesLcSchema extends Schema {
  up() {
    this.create("renglones_lcs", (table) => {
      table.increments("id").primary().notNullable().unsigned();
      table.specificType("numrenglon", "TINYINT").notNullable();
      table.integer("id_cotejo").notNullable().unsigned();
      table.text("criterio").notNullable();
      table.integer("puntos").notNullable().unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("renglones_lcs");
  }
}

module.exports = RenglonesLcSchema;
