"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
// Cambiar tipo de dato a longtext Foto de perfil y Foto de portada
class UsuarioSchema extends Schema {
  up() {
    this.create("usuarios", (table) => {
      table.increments("id").primary();
      table.integer("NumeroEconomico", 11).notNullable().unique();
      table.string("Nombre", 50).notNullable()
      table.string("ApellidoPaterno", 50).notNullable();
      table.string("ApellidoMaterno", 50).notNullable();
      table.string("RFC", 13).notNullable();
      table.string("CURP", 18).notNullable();
      table.string("Correo", 100).notNullable().unique();
      table.string("Grupos").nullable().defaultTo(null)
      table.string("CedulaProfesional", 100).notNullable();
      table.string("DepartamentoAcademico", 100).notNullable();
      table.text("FotoPerfil", "longtext").nullable().defaultTo(null);
      table.text("FotoPortada", "longtext").nullable().defaultTo(null);
      table
        .enu("Sexo", ["MASCULINO", "FEMENINO"])
        .notNullable()
        .defaultTo("MASCULINO");
      table
        .enu("Estudios", [
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
