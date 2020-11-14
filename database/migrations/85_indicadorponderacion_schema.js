"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IndicadorponderacionSchema extends Schema {
  up() {
    this.create("indicadorponderacion", (table) => {
      table.integer("id_evidenciaaprendizaje").unsigned();
      table.string("letra", 1).notNullable().defaultTo("A");
      table.specificType("ponderacion", "TINYINT").notNullable().defaultTo("0");
      /*table.primary("id_evidenciaaprendizaje", "letra", [
        "pk_indicadorponderacion",
      ]);*/
      table.timestamps();
    });
  }

  down() {
    this.drop("indicadorponderacion");
  }
}

module.exports = IndicadorponderacionSchema;
