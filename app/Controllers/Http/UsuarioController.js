"use strict";

/**
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
const Usuario = use("App/Models/Usuario");
class UsuarioController {
  async login({ request, auth }) {
    const { correo, contrasenia } = request.all();
    const token = await auth.attempt(correo, contrasenia);
    return token;
  }

  async store({ request, response, auth }) {
    //Solicitar informacion
    const info = request.all();

    //Creacion del usuario
    const usuario = await Usuario.create({
      numeroEconomico: info.numeroEconomico,
      nombre: info.nombre,
      apellidoPaterno: info.apellidoPaterno,
      apellidoMaterno: info.apellidoMaterno,
      rfc: info.rfc,
      curp: info.curp,
      correo: info.correo,
      cedulaProfesional: info.cedulaProfesional,
      departamentoAcademico: info.departamentoAcademico,
      fotoPerfil: info.fotoPerfil,
      fotoPortada: info.fotoPortada,
      user_type: 2,
      sexo: info.sexo,
      estudios: info.estudios,
      contrasenia: info.contrasenia,
    });

    // Conseguir el token del usuario
    const token = await auth.attempt(info.Correo, info.contrasenia);

    // Respuesta para el usuario
    return response.json({
      message: "Usuario registrado exitosamente",
      token: token.token,
      Usuario: usuario,
    });
  }
}

module.exports = UsuarioController;
