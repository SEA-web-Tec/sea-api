"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PuntosloSchema extends Schema {
  up() {
    this.create("puntoslos", (table) => {
      table.integer("id_renglonlo").notNullable().unsigned();
      table.integer("id_evaluacionevidencia").notNullable().unsigned();
      table.text("observaciones");
      table.specificType("puntos", "TINYINT").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("puntoslos");
  }
}

module.exports = PuntosloSchema;
