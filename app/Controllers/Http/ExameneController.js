"use strict";

const Examene = use("App/Models/Examene");
const Contenidoexamene = use("App/Models/Contenidoexamene.js");

class ExameneController {
  async index({ response, auth }) {
    const user = await auth.getUser();
    const examenes = await Examene.query().where("id_maestro", user.id).fetch();
    return response.status(201).json(examenes);
  }

  async store({ request, response, auth }) {
    const info = request.all();
    const user = await auth.getUser();
    const examen = await Examene.create({
      id_materia: info.id_materia,
      id_maestro: user.id,
      nombre: info.nombre,
      unidad: info.unidad,
      descripcion: info.descripcion,
    });
    const id_examen = await Examene.query()
      .where("id_maestro", user.id)
      .orderBy("created_at", "desc")
      .first();
    const contenidoExamen = [];
    for (let i = 0; i < info.reactivos.length; i++) {
      contenidoExamen.push(
        await Contenidoexamene.create({
          id_reactivo: info.reactivos[i],
          id_examen: id_examen.id,
          valor_reactivo: 100 / info.reactivos.length,
        })
      );
    }
    return response.json({
      message: "Se creo el examen exitosamente",
      examen: examen,
      contenidoExamen: contenidoExamen,
    });
  }
}

module.exports = ExameneController;
