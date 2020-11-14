"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TemarioSchema extends Schema {
  up() {
    this.create("temarios", (table) => {
      table.integer("id").notNullable();
      table.integer("tema").notNullable().defaultTo("0");
      table.integer("subtema").notNullable().defaultTo("0");
      table.text("descripcion").notNullable();
      table.string("objetivos").notNullable();
      table.text("competencias").notNullable();
      table.text("actividadesDeAprendizaje").notNullable();
      //table.primary("materia", "tema", "subtema"["pk_temarios"]);
      table.timestamps();
    });
  }

  down() {
    this.drop("temarios");
  }
}

module.exports = TemarioSchema;
