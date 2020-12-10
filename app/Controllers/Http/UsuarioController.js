"use strict";

/**
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
const Hash = use("Hash");
const Usuario = use("App/Models/Usuario");
class UsuarioController {
  async index() {
    return await Usuario.query().fetch();
  }

  async login({ request, response, auth }) {
    try {
      const { correo, contrasenia } = request.all();
      var user = await Usuario.query()
        .where({ correo: correo.toLowerCase() })
        .first();

      if (user) {
        const passwordVerified = await Hash.verify(
          contrasenia,
          user.contrasenia
        );

        if (passwordVerified) {
          var res = {};
          const token = await auth.generate(user);
          res.token = token.token;
          res.user = {
            id: user.id,
            nombres: user.nombres,
            apellidoPaterno: user.apellidoPaterno,
            apellidoMaterno: user.apellidoMaterno,
            departamentoAcademico: user.departamentoAcademico,
            fotoPerfil: user.fotoPerfil,
            fotoPortada: user.fotoPortada,
            correo: user.correo,
            numeroEconomico: user.numeroEconomico,
            rfc: user.rfc,
            curp: user.curp,
            cedulaProfesional: user.cedulaProfesional,
            estudios: user.estudios,
            sexo: user.sexo,
            userType: user.userType,
          };
          return response.status(200).json(res);
        }
        return response.status(401).json({
          message:
            "No ha sido posible verificar sus credenciales. El correo o la contraseña no coinciden.",
        });
      } else {
        return response.status(404).json({
          message: "No se encontró un usuario con ese correo registrado",
        });
      }
    } catch (err) {
      return response.status(500).json({
        message:
          "Ha ocurrido un error en el servidor, favor de intentarlo nuevamente.",
      });
    }
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
        nombres: info.nombres,
        apellidoPaterno: info.apellidoPaterno,
        apellidoMaterno: info.apellidoMaterno,
        rfc: info.rfc,
        curp: info.curp,
        correo: info.correo,
        cedulaProfesional: info.cedulaProfesional,
        departamentoAcademico: info.departamentoAcademico,
        fotoPerfil: info.fotoPerfil,
        fotoPortada: info.fotoPortada,
        userType: info.userType,
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
      return response.status(500).json({
        message:
          "Ha ocurrido un error en el servidor, favor de intentarlo nuevamente.",
      });
    }
  }

  async profile({ params, response }) {
    try {
      var user = await Usuario.query().where({ id: params.id }).first();
      var res = {};

      res.user = {
        id: user.id,
        nombres: user.nombres,
        apellidoPaterno: user.apellidoPaterno,
        apellidoMaterno: user.apellidoMaterno,
        departamentoAcademico: user.departamentoAcademico,
        fotoPerfil: user.fotoPerfil,
        fotoPortada: user.fotoPortada,
        correo: user.correo,
        numeroEconomico: user.numeroEconomico,
        rfc: user.rfc,
        curp: user.curp,
        cedulaProfesional: user.cedulaProfesional,
        estudios: user.estudios,
        sexo: user.sexo,
        userType: user.userType,
      };

      return response.status(200).json(res);
    } catch (err) {
      return response.status(500).json({
        message:
          "Ha ocurrido un error en el servidor, favor de intentarlo nuevamente.",
      });
    }
  }

  async update({ request, response, params }) {
    try {
      const updatedUser = {};

      if (request.body.fotoPerfil) {
        updatedUser.fotoPerfil = request.body.fotoPerfil;
      }

      if (request.body.fotoPortada) {
        updatedUser.fotoPortada = request.body.fotoPortada;
      }

      if (request.body.correo) {
        updatedUser.correo = request.body.correo;
      }

      if (request.body.contrasenia) {
        updatedUser.contrasenia = await Hash.make(request.body.contrasenia);
      }

      var user = await Usuario.query()
        .where({ id: params.id })
        .update(updatedUser);
      console.log(response.body, params);
      return response.status(201).json(user);
    } catch (err) {
      console.log(err);
      return response.status(500).json({
        message:
          "Ha ocurrido un error en el servidor, favor de intentarlo nuevamente.",
      });
    }
  }
}

module.exports = UsuarioController;
