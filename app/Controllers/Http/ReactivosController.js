"use strict";
const Reactivos = use("App/Models/Reactivos.js");
class ReactivosController {
  async index({ response, auth, params }) {
    const user = await auth.getUser();
    const reactivos = await Reactivos.query()
      .where("id_maestro", user.id)
      .where("id_materia", params.id_materia)
      .fetch();
    return response.status(201).json(reactivos);
  }

  async store({ request, response }) {
    const info = request.all();
    const reactivos = await Reactivos.create({
      id: info.id,
      id_maestro: info.id_maestro,
      id_materia: info.id_materia,
      unidad: info.unidad,
      tipo: info.tipo,
      texto_reactivo: info.texto_reactivo,
      respuesta_correcta: info.respuesta_correcta,
    });
    return response.json({
      message: "Se creo el reactivo exitosamente",
      reactivos: reactivos,
    });
  }

  async specific({ response, params, auth }) {
    const user = await auth.getUser();
    const reactivos = await Reactivos.query()
      .where("id_maestro", user.id)
      .andWhere("id_materia", params.id_materia)
      .andWhere("unidad", params.unidad)
      .fetch();
    return response.status(201).json(reactivos);
  }
}

module.exports = ReactivosController;
