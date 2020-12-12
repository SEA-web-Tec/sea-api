'use strict'

const Rubrica = use("App/Models/Rubrica")
const Renglonesrubrica = use("App/Models/Renglonesrubrica")

class RubricaController {

  async index ({ request, response, view, params }) {

    /*const renrub = await Renglonesrubrica.query()
    .where("id_rubrica", info.id_rubrica).fetch();*/
  
    const rub = await Rubrica.query()
    .where("id_usuario", params.id_usuario).fetch();

    return response.json({
      Rubrica: rub,
      //Renglonesrubrica: renrub,
    });
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    //solicitar info
    let aux;
    const info = request.all();

    const rubrica = await Rubrica.create({
      nombre: info.Rubrica.nombre,
      descripcion: info.Rubrica.descripcion,
      id_usuario: info.Rubrica.id_usuario,
      id_carpeta: info.Rubrica.id_carpeta,
    });
    
    for (let i = 0; i < info.Renglonesrubrica.length; i++) {
      //const element = array[i];
      aux = await Renglonesrubrica.create({
        numrenglon: i+1,
        id_rubrica: rubrica.toJSON().id,
        criterio: info.Renglonesrubrica[i].criterio,
        excelente: info.Renglonesrubrica[i].excelente,
        bueno: info.Renglonesrubrica[i].bueno,
        regular: info.Renglonesrubrica[i].regular,
        suficiente: info.Renglonesrubrica[i].suficiente,
        insuficiente: info.Renglonesrubrica[i].insuficiente,
        puntosexcelente: info.Renglonesrubrica[i].puntosexcelente,
        puntosbueno: info.Renglonesrubrica[i].puntosbueno,
        puntosregular: info.Renglonesrubrica[i].puntosregular,
        puntossuficiente: info.Renglonesrubrica[i].puntossuficiente,
        puntosinsuficiente: info.Renglonesrubrica[i].puntosinsuficiente,
      });
    }

    return response.json({
      message: "se creo la rubrica y sus renglones",
      Rubrica: rubrica,
      Aux: aux,
    });
  }

  async consultarubrica ({params, response, request}) {
    const rub = await Rubrica.query()
    .where("id", params.id)
    .first();

    return response.json({
      Rubrica: rub,
    });
  }

  async show ({ params, request, response, view }) {
    
    const renrub = await Renglonesrubrica.query()
    .where("id_rubrica", params.id_rubrica).fetch();

    return response.json({
      //Rubrica: rub,
      Renglonesrubrica: renrub,
    });
  }


  async edit ({ params, request, response, view }) {
    

  }


  async update ({ params, request, response }) {
  }

  async borrareditarrenglon ({params, response, request}) {
    let aux;
    const info = request.all()

    await Renglonesrubrica.query()
    .where("id_rubrica", params.id)
    .delete();

    for (let i = 0; i < info.Renglonesrubrica.length; i++) {
      aux = await Renglonesrubrica
      .create({
        numrenglon: i+1,
        id_rubrica: params.id,
        criterio: info.Renglonesrubrica[i].criterio,
        excelente: info.Renglonesrubrica[i].excelente,
        bueno: info.Renglonesrubrica[i].bueno,
        regular: info.Renglonesrubrica[i].regular,
        suficiente: info.Renglonesrubrica[i].suficiente,
        insuficiente: info.Renglonesrubrica[i].insuficiente,
        puntosexcelente: info.Renglonesrubrica[i].puntosexcelente,
        puntosbueno: info.Renglonesrubrica[i].puntosbueno,
        puntosregular: info.Renglonesrubrica[i].puntosregular,
        puntossuficiente: info.Renglonesrubrica[i].puntossuficiente,
        puntosinsuficiente: info.Renglonesrubrica[i].puntosinsuficiente,
      });
    }

    return response.json({
      Aux: aux,
    });
  }

  async destroy ({ params, request, response }) {
    //const info = request.all();

    await Rubrica.query().where("id", params.id).delete();
    await Renglonesrubrica.query()
    .where("id_rubrica", params.id).delete();

    return response.json({
      message: "Se borro la rubrica",
    });
  }
}

module.exports = RubricaController
