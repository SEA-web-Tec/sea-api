"use strict";
const Grupo = use("App/Models/Grupo");
const Database = use("Database");

class GrupoController {
  async index({ response }) {
    const grupos = await Database.table("grupos")
      .select("grupos.id", "nombre", "grupo")
      .innerJoin("materias", "grupos.materia_id", "materias.id");
    return response.status(201).json(grupos);
  }

  async show({ response, params }) {
    const grupos = await Database.table("grupos")
      .select("grupos.id", "nombre", "grupo", "carrera")
      .innerJoin("materias", "grupos.materia_id", "materias.id")
      .where("usuario_id", params.id);
    return response.status(201).json(grupos);
  }

  async store({ request, response }) {
    const info = request.all();
    const grupo = await Grupo.create({
      materia_id: info.materia_id,
      usuario_id: info.usuario_id,
      grupo: info.grupo,
      anio: info.anio,
      periodo: info.periodo,
    });
    return response.json({
      message: "Se creo el grupo exitosamente",
      grupo: grupo,
    });
  }
}

module.exports = GrupoController;
