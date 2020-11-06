"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InstrumentaciondidacticaunidadSchema extends Schema {
  up() {
    this.create("instrumentaciondidacticaunidad", (table) => {
      table.increments("id");
      table.integer("id_instrumentaciondidactica").unsigned();
      table.integer("unidad").defaultTo("0");
      table.text("actividades_aprendizaje");
      table.text("actividades_enseñanza");
      table.text("desarrollo_competencias_genericas");
      table.text("material_apoyo");
      table.integer("semana_clases").defaultTo("0");
      table.integer("semana_evaluacion").defaultTo("0");
      table.text("comentario");
      table
        .text("id_indicadores_alcance")
        .unsigned()
        .references("id")
        .inTable("indicadoresalcance");
      table.primary("id_instrumentaciondidactica", "unidad", [
        "pk_instrumentaciondidacticaunidad",
      ]);
      table.timestamps();
    });
  }

  down() {
    this.drop("instrumentaciondidacticaunidad");
  }
}

module.exports = InstrumentaciondidacticaunidadSchema;
