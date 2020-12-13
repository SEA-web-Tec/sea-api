'use strict'

const Listasdeobservacion = use("App/Models/Listasdeobservacion")
const Rengloneslo = use("App/Models/Renglones_lo")

class ListasdeobservacionController {

  async index ({ request, response, view, params }) {
    //const info = request.all();

    const lc = await Listasdeobservacion.query()
    .where("id_usuario", params.id_usuario).fetch();

    return response.json({
      Listasdecotejo: lc,
    });
  }


  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    //solicitar info
    let aux;
    const info = request.all();

    const listadeobervacion = await Listasdeobservacion.create({
      nombre: info.Listasdeobservacion.nombre,
      descripcion: info.Listasdeobservacion.descripcion,
      id_usuario: info.Listasdeobservacion.id_usuario,
      id_carpeta: info.Listasdeobservacion.id_carpeta,
    });
    
    for (let i = 0; i < info.Renglones_lo.length; i++) {
      //const element = array[i];
      aux = await Rengloneslo.create({
        numrenglon: info.Renglones_lo[i].numrenglon,
        id_observacion: listadeobervacion.toJSON().id,
        criterio: info.Renglones_lo[i].criterio,
        puntos: info.Renglones_lo[i].puntos,
      });
    }

    return response.json({
      message: "se creo la lista de observacion y sus renglones",
      Listasdeobservacion: listadeobervacion,
      Aux: aux,
    });
  }

  async show ({ params, request, response, view }) {
    //const info = request.all();

    const renlo = await Rengloneslo.query()
    .where("id_observacion", params.id_observacion).fetch();

    return response.json({
      Listasdecotejo: renlo,
    });
  }

  async consultalo ({params, response, request}) {
    const lo = await Listasdeobservacion.query()
    .where("id", params.id)
    .first();

    return response.json({
      Listasdeobservacion: lo,
    });
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async editar ({params, response, request}) {
    let aux;
    const info = request.all()

    await Rengloneslo.query()
    .where("id_observacion", params.id)
    .delete();

    const lo = await Listasdeobservacion.query()
    .where("id", params.id)
    .update({
      nombre: info.Listasdeobservacion.nombre,
      descripcion: info.Listasdeobservacion.descripcion,
    });

    for (let i = 0; i < info.Renglones_lo.length; i++) {
      aux = await Rengloneslo
      .create({
        numrenglon: info.Renglones_lo[i].numrenglon,
        id_observacion: params.id,
        criterio: info.Renglones_lo[i].criterio,
        puntos: info.Renglones_lo[i].puntos,
      });
    }

    return response.json({
      Listasdecotejo: lo,
      Aux: aux,
    });
  }

  async destroy ({ params, request, response }) {
    await Listasdeobservacion.query().where("id", params.id).delete();
    await Rengloneslo.query()
    .where("id_observacion", params.id).delete();

    return response.json({
      message: "Se borro la lista de observacion",
    });
  }
}

module.exports = ListasdeobservacionController
