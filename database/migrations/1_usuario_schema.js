"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
// Cambiar tipo de dato a longtext Foto de perfil y Foto de portada
class UsuarioSchema extends Schema {
  up() {
    this.create("usuarios", (table) => {
      table.increments().primary();
      table.integer("numeroEconomico", 11).notNullable().unique();
      table.string("nombre", 50).notNullable();
      table.string("apellidoPaterno", 50).notNullable();
      table.string("apellidoMaterno", 50).notNullable();
      table.string("rfc", 13).notNullable();
      table.string("curp", 18).notNullable();
      table.string("correo", 100).notNullable().unique();
      table.string("grupos").nullable().defaultTo(null);
      table.string("cedulaProfesional", 100).notNullable();
      table
        .enu("departamentoAcademico", [
          "Departamento de Ciencias Basicas",
          "Departamento de Ciencias Economico Administrativas",
          "Departamento de Ciencias de la Tierra",
          "Departamento de Ingenierias",
          "Departamento de Metal-Mecanica",
          "Departamento de Sistemas y Computación",
        ])
        .notNullable()
        .defaultTo("Departamento de Ciencias Basicas");
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
      table.integer("user_type").notNullable();
      table.string("contrasenia", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("usuarios");
  }
}

module.exports = UsuarioSchema;
