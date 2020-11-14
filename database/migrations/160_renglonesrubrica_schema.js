"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RenglonesrubricaSchema extends Schema {
  up() {
    this.create("renglonesrubricas", (table) => {
      table.increments("id").primary().unsigned();
      table.specificType("numrenglon", "TINYINT").notNullable();
      table.integer("id_rubrica").notNullable();
      table.text("criterio").notNullable();
      table.text("excelente").notNullable();
      table.text("bueno").notNullable();
      table.text("regular").notNullable();
      table.text("suficiente").notNullable();
      table.text("insuficiente").notNullable();
      table.integer("puntosexcelente").notNullable();
      table.integer("puntosbueno").notNullable();
      table.integer("puntosregular").notNullable();
      table.integer("puntossuficiente").notNullable();
      table.integer("puntosinsuficiente").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("renglonesrubricas");
  }
}

module.exports = RenglonesrubricaSchema;
