"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AsignacionesSchema extends Schema {
  up() {
    this.create("asignaciones", (table) => {
      table.increments("id").primary();
      table.integer("id_examen").notNullable().unsigned();
      table.integer("id_evaluacion_evidencia").notNullable().unsigned();
      table
        .enu("diagnostico", ["diagnostico", "formativo", "sumativo"])
        .notNullable()
        .defaultTo("sumativo");
      table.specificType("oportunidad", "TINYINT").notNullable().defaultTo(1);
      table.datetime("inicio").notNullable();
      table.datetime("fin").notNullable();
      table
        .enu("estado", ["abierto", "libre", "no disponible", "finalizado"])
        .notNullable()
        .defaultTo("abierto");
      table.boolean("ordenar_azar").notNullable().defaultTo(1);
      table
        .enu("navegacion", ["libre", "secuencial"])
        .notNullable()
        .defaultTo("libre");
      table.datetime("tiempo_limite").notNullable();
      table
        .enu("periodo_gracia", [
          "enviar intento automaticamente",
          "puede terminar el intento",
          "no puede contestar mas reactivos",
        ])
        .notNullable()
        .defaultTo("enviar intento automaticamente");
      table.datetime("tiempo_periodo_gracia").notNullable();
      table
        .specificType("intentos_permitidos", "TINYINT")
        .notNullable()
        .defaultTo(1);
      table
        .enu("metodo_calificacion", [
          "ultimo intento",
          "calificacion mas alta",
          "promedio de los intentos",
        ])
        .notNullable()
        .defaultTo("calificacion mas alta");
      table
        .enu("revision", [
          "al finalizar el intento",
          "al finalizar la asignacion",
        ])
        .notNullable()
        .defaultTo("al finalizar la asignacion");
      table.timestamps();
    });
  }

  down() {
    this.drop("asignaciones");
  }
}

module.exports = AsignacionesSchema;
