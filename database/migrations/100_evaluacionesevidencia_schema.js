"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EvaluacionesevidenciaSchema extends Schema {
  up() {
    this.create("evaluacionesevidencia", (table) => {
      table.increments("id");
      table.integer("id_evidencia_aprendizaje").notNullable().unsigned();
      table.string("id_alumno", 10).notNullable(); //.references('id').inTable('alumno')
      table.specificType("oportunidad", "TINYINT").notNullable();
      table.specificType("calificacion", "TINYINT").notNullable();
      table.integer("observaciones").notNullable();
      //indexes
      table.timestamps();
    });
  }

  down() {
    this.drop("evaluacionesevidencia");
  }
}

module.exports = EvaluacionesevidenciaSchema;
