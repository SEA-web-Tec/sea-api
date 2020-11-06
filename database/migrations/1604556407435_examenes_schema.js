"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ExamenesSchema extends Schema {
  up() {
    this.create("examenes", (table) => {
      table.increments('id');
      table
        .integer("id_materia")
        .unsigned()
        .references("clave")//Propenso a cambiar
        .inTable("materias");
      table
        .integer("id_maestro")
        .unsigned()
        .references("id")
        .inTable("usuarios");
      table.text("nombre");
      table.integer("unidad");
      table.integer("descripcion").nullable().defaultTo(null);
      table.date("fecha_creacion");
      table.timestamps();
    });
  }

  down() {
    this.drop("examenes");
  }
}

module.exports = ExamenesSchema;
