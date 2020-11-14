"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ObservacionesSchema extends Schema {
  up() {
    this.create("observaciones", (table) => {
      table.integer("id").notNullable().unsigned();
      table.text("observaciones").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("observaciones");
  }
}

module.exports = ObservacionesSchema;
