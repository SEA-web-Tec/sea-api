'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments('id').primary()
      table.integer('NumeroEconomico', 11).notNullable().unique().reference('NumeroEconomico')
      table.string('Nombre', 50).notNullable()
      table.string('ApellidoPaterno', 50).notNullable()
      table.string('ApellidoMaterno', 50).notNullable()
      table.string('RFC', 13).notNullable()
      table.string('CURP', 18).notNullable()
      table.string('Correo', 100).notNullable()
      table.string('CedulaProfesional', 100).notNullable()
      table.string('DepartamentoAcademico', 100).notNullable().reference('DepartamentoAcademico')
      table.enu('Sexo', ['MASCULINO','FEMENINO']).notNullable().defaultTo('MASCULINO')
      table.enu('Estudios', ['PENDIENTE','PRIMARIA','SECUNDARIA','BACHILLERATO','TECNICO','PASANTE','LICENCIATURA','ESPECIALIDAD','MAESTRIA','DOCTORADO']).notNullable().defaultTo('PENDIENTE')
      table.integer('user_type', 1).notNullable()
      table.string('contrasenia', 60).notNullable()
      table.timestamps()
      table.reference()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema
