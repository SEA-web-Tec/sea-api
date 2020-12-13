'use strict'

const Listasdecotejo = use("App/Models/Listasdecotejo")
const Rengloneslc = use("App/Models/Renglones_lc")

class ListasdecotejoController {

  async index ({ request, response, view, params }) {
    //const info = request.all();

    const lc = await Listasdecotejo.query()
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

    const listadecotejo = await Listasdecotejo.create({
      nombre: info.Listasdecotejo.nombre,
      descripcion: info.Listasdecotejo.descripcion,
      id_usuario: info.Listasdecotejo.id_usuario,
      id_carpeta: info.Listasdecotejo.id_carpeta,
    });
    
    for (let i = 0; i < info.Renglones_lc.length; i++) {
      //const element = array[i];
      aux = await Rengloneslc.create({
        numrenglon: info.Renglones_lc[i].numrenglon,
        id_cotejo: listadecotejo.toJSON().id,
        criterio: info.Renglones_lc[i].criterio,
        puntos: info.Renglones_lc[i].puntos,
      });
    }

    return response.json({
      message: "se creo la lista de cotejo y sus renglones",
      Listasdecotejo: listadecotejo,
      Aux: aux,
    });
  }

  async consultalc ({params, response, request}) {
    const lc = await Listasdecotejo.query()
    .where("id", params.id)
    .first();

    return response.json({
      Listasdecotejo: lc,
    });
  }

  async show ({ params, request, response, view }) {
    //const info = request.all();

    const renlc = await Rengloneslc.query()
    .where("id_cotejo", params.id_cotejo).fetch();

    return response.json({
      Listasdecotejo: renlc,
    });
  }


  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async borrareditarrenglon ({params, response, request}) {
    let aux;
    const info = request.all()

    await Rengloneslc.query()
    .where("id_cotejo", params.id)
    .delete();

    const lc = await Listasdecotejo.query()
    .where("id", params.id)
    .update({
      nombre: info.Listasdecotejo.nombre,
      descripcion: info.Listasdecotejo.descripcion,
    });

    for (let i = 0; i < info.Renglones_lc.length; i++) {
      aux = await Rengloneslc
      .create({
        numrenglon: info.Renglones_lc[i].numrenglon,
        id_cotejo: params.id,
        criterio: info.Renglones_lc[i].criterio,
        puntos: info.Renglones_lc[i].puntos,
      });
    }

    return response.json({
      Listasdecotejo: lc,
      Aux: aux,
    });
  }

  async destroy ({ params, request, response }) {
    //const info = request.all();

    await Listasdecotejo.query().where("id", params.id).delete();
    await Rengloneslc.query()
    .where("id_cotejo", params.id).delete();

    return response.json({
      message: "Se borro la lista de cotejo",
    });
  }
}

module.exports = ListasdecotejoController
