"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with instrumentaciondidacticas
 */
const Instrumentaciondidactica = use("App/Models/Instrumentaciondidactica");
class InstrumentaciondidacticaController {
  async index({ request }) {
    const info = request.all();
    return await Instrumentaciondidactica.query()
      .where(
        "grupo_id",
        "=",
        info.grupo_id,
        "&&",
        "usuario_id",
        "=",
        info.usuario_id
      )
      .fetch();
  }

  async intrumentacion_completa({ request }) {
    const info = request.all();
    const intrumentacion = await Instrumentaciondidactica.query().where(
      "grupo_id",
      "=",
      info.grupo_id,
      "&&",
      "usuario_id",
      "=",
      info.usuario_id
    );
    return intrumentacion.instrumentaciondidacticaunidad().fetch();
  }

  async store({ request, response }) {
    const info = request.all();
    const datos = await Instrumentaciondidactica.create({
      materia_id: info.materia_id,
      usuario_id: info.usuario_id,
    });
    return response.json({
      message: "Se el id de Ins Dic exitosamente",
      Instrumentaciondidactica: datos,
    });
  }

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = InstrumentaciondidacticaController;
