"use strict";

const Instrumentaciondidactica = use("App/Models/Instrumentaciondidactica");
const Grupo = use("App/Models/Grupo");
const Materia = use("App/Models/Materia");

class InstrumentaciondidacticaController {
  async index({ request, response }) {
    const info = request.all();
    await Instrumentaciondidactica.query()
      .where("grupo_id", info.grupo_id)
      .andWhere("usuario_id", info.usuario_id)
      .fetch();
    await Grupo.query().where("id", info.grupo_id).fetch();
  }

  async store({ request, response }) {
    const info = request.all();

    const elemento = await Instrumentaciondidactica.query()
      .where("grupo_id", info.grupo_id)
      .andWhere("usuario_id", info.usuario_id)
      .fetch();
    if (JSON.stringify(elemento) == "[]") {
      await Instrumentaciondidactica.create({
        grupo_id: info.grupo_id,
        usuario_id: info.usuario_id,
      });
    }
    const intrumentacion = await Instrumentaciondidactica.query()
      .where("grupo_id", info.grupo_id)
      .andWhere("usuario_id", info.usuario_id)
      .fetch();
    const grupo = await Grupo.query().where("id", info.grupo_id).fetch();
    const materia = await Materia.query()
      .where("id", grupo.toJSON()[0].materia_id)
      .fetch();

    return response.json({
      intrumentacion: intrumentacion,
      unidades: materia.toJSON()[0].unidades,
    });
  }

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = InstrumentaciondidacticaController;
