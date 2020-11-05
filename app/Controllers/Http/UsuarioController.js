"use strict";
const Usuario = use('app/Models/Usuario.js')
class UsuarioController {
  store({ request }) {
    const {
      NumeroEconomico,
      Nombre,
      ApellidoPaterno,
      ApellidoMaterno,
      RFC,
      CURP,
      Correo,
      CedulaProfesional,
      DepartamentoAcademico,
      Sexo,
      Estudios,
      contrasenia,
    } = request.all();
      
    const usuario = Usuario.create({
      NumeroEconomico,
      Nombre,
      ApellidoPaterno,
      ApellidoMaterno,
      RFC,
      CURP,
      Correo,
      CedulaProfesional,
      DepartamentoAcademico,
      Sexo,
      Estudios,
      contrasenia,
    });
    return usuario
  }
}

module.exports = UsuarioController;
