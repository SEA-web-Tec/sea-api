"use strict";

/**
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
const Usuario = use('App/Models/Usuario')
class UsuarioController {
  // async login({ request, auth}) {
  //   const { Correo, contrasenia } = request.all();
  //   const token = await auth.attempt(Correo, contrasenia)
  //   return token;
  // }
  async store({ request, response, auth }) {

    //Solicitar informacion 
    const info =  request.all()
      
    //Creacion del usuario
    const usuario = await Usuario.create({
      numeroEconomico: info.NumeroEconomico,
      nombre: info.Nombre,
      apellidoPaterno: info.ApellidoPaterno,
      apellidoMaterno: info.ApellidoMaterno,
      rfc: info.RFC,
      curp: info.CURP,
      correo: info.Correo,
      cedulaProfesional: info.CedulaProfesional,
      departamentoAcademico: info.DepartamentoAcademico,
      fotoPerfil: info.FotoPerfil,
      fotoPortada: info.FotoPortada,
      user_type: 2,
      sexo: info.Sexo,
      estudios: info.Estudios,
      contrasenia: info.contrasenia,
    });

    // Conseguir el token del usuario
    const token = await auth.attempt(info.Correo, info.contrasenia)

    // Respuesta para el usuario
    return response.json({
      message: "Usuario registrado exitosamente",
      token: token.token,
      Usuario: usuario
    })
  }
}

module.exports = UsuarioController;
