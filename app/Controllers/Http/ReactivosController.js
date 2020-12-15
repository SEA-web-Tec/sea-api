"use strict";
const Reactivos = use("App/Models/Reactivos.js");
class ReactivosController {
  async store({ request, response, auth }) {
    const info = request.all();
    const user = await auth.getUser();
    const reactivos = await Reactivos.create({
      id_maestro: user.id,
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
