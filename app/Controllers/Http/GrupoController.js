"use strict";
const Grupo = use("App/Models/Grupo");

class GrupoController {
  async index({ response, params }) {
    const grupos = await Grupo.query()
      .from(["grupos", "materias"])
      .where("usuario_id", params.id)
      .fetch();

    return response.status(201).json(grupos);
  }

  async store({ request, response }) {
    // Solicitar informacion
    const info = request.all();

    const date = new Date();
    const grupo = await Grupo.create({
      grupo: info.grupo,
      materia_id: 1,
      usuario_id: info.usuario_id,
      anio: info.anio,
      periodo: info.periodo,
      gestion_del_curso: info.gestion_del_curso,
      id_intrumentaciondidactica: 1,
      id_profesor_evaluador: 1,
      fecha_cambio: date,
      updated_at: date,
    });
    return response.json({
      message: "Se creo el grupo exitosamente",
      Grupo: grupo,
    });
  }
}

module.exports = GrupoController;
