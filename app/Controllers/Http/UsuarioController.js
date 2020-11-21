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

  async signup({ request, response, auth }) {
    try {
      //Solicitar informacion
      const info = request.all();

      const numeroEconomicoExists = await Usuario.query()
        .where("numeroEconomico", info.numeroEconomico)
        .first();

      const correoExists = await Usuario.query()
        .where("correo", info.correo.toLowerCase())
        .first();

      if (numeroEconomicoExists) {
        throw {
          message:
            "No se creó la cuenta porque ya existe un usuario con ese número económico.",
        };
      } else if (correoExists) {
        throw {
          message:
            "No se creó la cuenta porque ya existe un usuario con ese correo.",
        };
      }

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
      const token = await auth.attempt(info.correo, info.contrasenia);

      // Respuesta para el usuario
      return response.status(201).json({
        message: "Usuario registrado exitosamente!",
        token: token.token,
        Usuario: usuario,
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

module.exports = UsuarioController;
