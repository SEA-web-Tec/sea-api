'use strict'
const Renglonesrubrica = use("App/Models/Renglonesrubrica")

class RenglonesrubricaController {
 
  async index ({ request, response, view }) {
    const info = request.all();
    
    return await Renglonesrubrica.query()
    .where("id_usuario", info.id_usuario).fetch();

  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    //solicitar info
    const info = request.all();

    const renglonesrubrica = await Renglonesrubrica.create({
      numrenglon: info.numrenglon,
      id_rubrica: info.id_rubrica,
      criterio: info.criterio,
      excelente: info.excelente,
      bueno: info.bueno,
      regular: info.regular,
      suficiente: info.suficiente,
      insuficiente: info.insuficiente,
      puntosexcelente: info.puntosexcelente,
      puntosbueno: info.puntosbueno,
      puntosregular: info.puntosregular,
      puntossuficiente: info.puntossuficiente,
      puntosinsuficiente: info.puntosinsuficiente,
    });
    return response.json({
      message: "se creo el renglon rubrica",
      Renglonesrubrica: renglonesrubrica,
    });
  }

  async show ({ params, request, response, view }) {
    const info = request.all();
    
    return await Renglonesrubrica.query()
    .where("id_rubrica", info.id_rubrica).fetch();

  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = RenglonesrubricaController
