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
      Sexo,
      FotoPerfil,
      FotoPortada,
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
      FotoPerfil,
      FotoPortada,
      user_type: 2,
      Sexo,
      Estudios,
      contrasenia,
    });
    return usuario
  }
}

module.exports = UsuarioController;
