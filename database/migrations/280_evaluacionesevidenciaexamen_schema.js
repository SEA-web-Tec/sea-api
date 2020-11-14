"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
//fantan cosas
class EvaluacionesevidenciaexamenSchema extends Schema {
  up() {
    this.create("evaluacionesevidenciaexamen", (table) => {
      table.increments("id").primary();
      table.timestamps();
    });
  }

  down() {
    this.drop("evaluacionesevidenciaexamen");
  }
}

module.exports = EvaluacionesevidenciaexamenSchema;
