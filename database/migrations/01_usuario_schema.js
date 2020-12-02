"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
// Cambiar tipo de dato a longtext Foto de perfil y Foto de portada
class UsuarioSchema extends Schema {
  up() {
    this.create("usuarios", (table) => {
      table.increments().primary();
      table.bigInteger("numeroEconomico", 11).notNullable().unique();
      table.string("nombres", 50).notNullable();
      table.string("apellidoPaterno", 50).notNullable();
      table.string("apellidoMaterno", 50).notNullable();
      table.string("rfc", 13).notNullable();
      table.string("curp", 18).notNullable();
      table.string("correo", 100).notNullable().unique();
      table.string("grupos").nullable().defaultTo(null);
      table.string("cedulaProfesional", 8).notNullable();
      table
        .enu("departamentoAcademico", [
          "DEPARTAMENTO DE CIENCIAS BASICAS",
          "DEPARTAMENTO DE CIENCIAS ECONOMICO ADMINISTRATIVAS",
          "DEPARTAMENTO DE CIENCIAS DE LA TIERRA",
          "DEPARTAMENTO DE INGENIERIAS",
          "DEPARTAMENTO DE METAL-MECANICA",
          "DEPARTAMENTO DE SISTEMAS Y COMPUTACIÓN",
        ])
        .notNullable()
        .defaultTo("DEPARTAMENTO DE CIENCIAS BASICAS");
      table.text("fotoPerfil", "longtext").nullable().defaultTo(null);
      table.text("fotoPortada", "longtext").nullable().defaultTo(null);
      table
        .enu("sexo", ["MASCULINO", "FEMENINO"])
        .notNullable()
        .defaultTo("MASCULINO");
      table
        .enu("estudios", [
          "PENDIENTE",
          "PRIMARIA",
          "SECUNDARIA",
          "BACHILLERATO",
          "TECNICO",
          "PASANTE",
          "LICENCIATURA",
          "ESPECIALIDAD",
          "MAESTRIA",
          "DOCTORADO",
        ])
        .notNullable()
        .defaultTo("PENDIENTE");
      table.integer("userType").notNullable();
      table.string("contrasenia", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("usuarios");
  }
}

module.exports = UsuarioSchema;
