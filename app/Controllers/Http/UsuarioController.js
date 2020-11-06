"use strict";
const Usuario = use('App/Models/Usuario')
class UsuarioController {
  async login({ request, auth}) {
    const { Correo, contrasenia } = request.all();
    const token = await auth.attempt(Correo, contrasenia)
    return token;
  }
  async store({ request }) {
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
      
    const usuario = await Usuario.create({
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
    return this.login(...arguments)
  }
}

module.exports = UsuarioController;
