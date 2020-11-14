"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InstrumentaciondidacticaunidadSchema extends Schema {
  up() {
    this.create("instrumentaciondidacticaunidad", (table) => {
      table.integer("id_instrumentaciondidactica").unsigned();
      table.integer("unidad").defaultTo("1");
      table.text("actividades_aprendizaje").notNullable();
      table.text("actividades_enseñanza").notNullable();
      table.text("desarrollo_competencias_genericas").notNullable();
      table.text("material_apoyo").notNullable();
      table.integer("semana_clases").defaultTo("0");
      table.integer("semana_evaluacion").defaultTo("0");
      table.text("comentario").nullable();
      /*table.primary("id_instrumentaciondidactica", "unidad", [
        "pk_instrumentaciondidacticaunidad",
      ]);*/
      table.timestamps();
    });
  }

  down() {
    this.drop("instrumentaciondidacticaunidad");
  }
}

module.exports = InstrumentaciondidacticaunidadSchema;
