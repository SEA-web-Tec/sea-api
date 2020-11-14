"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with temarios
 */
const Temario = use("App/Models/Temario");

class TemarioController {
  //buscar indice
  async index({ request }) {
    const materia_id = request.all();
    return await Temario.query().where("id", materia_id.id).fetch();
  }

  //crear
  async create({ request, response, view }) {}

  //guardar
  async store({ request, response }) {
    const info = request.all();

    const date = new Date();
    const temario = await Temario.create({
      id: info.id,
      tema: info.tema,
      subtema: info.subtema,
      descripcion: info.descripcion,
      objetivos: info.objetivos,
      competencias: info.competencias,
      actividadesDeAprendizaje: info.actividadesDeAprendizaje,
    });
    return response.json({
      message: "Se creo la unidad del temario exitosamente",
      Temario: temario,
    });
  }

  async show({ params, request, response, view }) {}

  async edit({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = TemarioController;
