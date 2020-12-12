"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MateriaSchema extends Schema {
  up() {
    this.create("materias", (table) => {
      table.increments("id").primary();
      table.string("nombre", 100).notNullable();
      table.string("abreviatura", 20).notNullable();
      table
        .enu("departamento_academico", [
          "DEPARTAMENTO DE CIENCIAS BASICAS",
          "DEPARTAMENTO DE CIENCIAS ECONOMICO ADMINISTRATIVAS",
          "DEPARTAMENTO DE CIENCIAS DE LA TIERRA",
          "DEPARTAMENTO DE INGENIERIAS",
          "DEPARTAMENTO DE METAL-MECANICA",
          "DEPARTAMENTO DE SISTEMAS Y COMPUTACIÓN",
        ])
        .notNullable();
      table.integer("semestre").notNullable().defaultTo(1);
      table.integer("id_temario").notNullable().defaultTo(0);
      table.integer("unidades").unsigned().notNullable().defaultTo(0);
      table
        .enu("carrera", [
          "ARQUITECTURA",
          "INGENIERÍA EN GESTIÓN EMPRESARIAL",
          "INGENIERÍA BIOQUÍMICA",
          "INGENIERÍA CIVIL",
          "INGENIERÍA ELECTROMECÁNICA",
          "INGENIERÍA EN SISTEMAS COMPUTACIONALES",
          "INGENIERÍA INDUSTRIAL",
          "LICENCIATURA EN ADMINISTRACIÓN",
          "CONTADOR PÚBLICO",
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
