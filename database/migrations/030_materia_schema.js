"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MateriaSchema extends Schema {
  up() {
    this.create("materias", (table) => {
      table.increments("id").primary();
      table.string("nombre", 100).notNullable();
      table.string("abreviatura", 20).notNullable();
      table.integer("departamento_academico").notNullable().defaultTo(0);
      table.integer("semestre").notNullable().defaultTo(1);
      table.integer("id_temario").notNullable().defaultTo(0);
      table.integer("unidades").unsigned().notNullable().defaultTo(0);
      table
        .enu("carrera", [
          "Arquitectura",
          "Ingeniería en Gestión Empresarial",
          "Ingeniería Bioquímica",
          "Ingeniería Civil",
          "Ingeniería Electromecánica",
          "Ingeniería en Sistemas Computacionales",
          "Ingeniería Industrial",
          "Licenciatura en Administración",
          "Contador Público",
        ])
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("materias");
  }
}

module.exports = MateriaSchema;
