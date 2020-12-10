"use strict";
const Materia = use("App/Models/Materia");
class MateriaController {
  async index() {
    return await Materia.query().fetch();
  }

  async store({ request, response }) {
    // Solicitar informacion
    const info = request.all();

    const materia = await Materia.create({
      nombre: info.nombre,
      abreviatura: info.abreviatura,
      departamento_academico: info.departamento_academico,
      semestre: info.semestre,
      id_temario: info.id_temario,
      unidades: info.unidades,
      carrera: info.carrera,
    });
    return response.json({
      message: "Se creo la materia exitosamente",
      Materia: materia,
    });
  }
}

module.exports = MateriaController;
