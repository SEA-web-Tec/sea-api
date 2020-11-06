"use strict";
const Usuario = use('App/Models/Usuario')
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
      user_type,
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
      user_type,
      Sexo,
      Estudios,
      contrasenia,
    });
    return usuario
  }
}

module.exports = UsuarioController;
