"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IndicadoresalcanceSchema extends Schema {
  up() {
    this.create("indicadoresalcance", (table) => {
      table.increments('id');
      table.string("a", 100).defaultTo(" ");
      table.string("b", 100).defaultTo(" ");
      table.string("c", 100).defaultTo(" ");
      table.string("d", 100).defaultTo(" ");
      table.string("e", 100).defaultTo(" ");
      table.string("f", 100).defaultTo(" ");
      table.string("g", 100).defaultTo(" ");
      table.string("h", 100).defaultTo(" ");
      table.string("i", 100).defaultTo(" ");
      table.string("j", 100).defaultTo(" ");
      table.string("k", 100).defaultTo(" ");
      table.string("l", 100).defaultTo(" ");
      table.string("m", 100).defaultTo(" ");
      table.string("n", 100).defaultTo(" ");
      table.string("o", 100).defaultTo(" ");
      table.string("p", 100).defaultTo(" ");
      table.string("q", 100).defaultTo(" ");
      table.string("r", 100).defaultTo(" ");
      table.string("s", 100).defaultTo(" ");
      table.string("t", 100).defaultTo(" ");
      table.string("u", 100).defaultTo(" ");
      table.string("v", 100).defaultTo(" ");
      table.string("w", 100).defaultTo(" ");
      table.string("x", 100).defaultTo(" ");
      table.string("y", 100).defaultTo(" ");
      table.string("z", 100).defaultTo(" ");
      table.timestamps();
    });
  }

  down() {
    this.drop("indicadoresalcance");
  }
}

module.exports = IndicadoresalcanceSchema;
