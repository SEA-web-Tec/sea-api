"use strict";
const Materia = use("App/Models/Materia");
const Database = use("Database");

class MateriaController {
  async index() {
    return await Materia.query().fetch();
  }

  async store({ request, response }) {
    // Solicitar informacion
    const info = request.all();
    const count = await Database.table("temarios")
      .count("tema as total")
      .where("id", info.id_temario)
      .groupBy("tema");
    const materia = await Materia.create({
      nombre: info.nombre,
      abreviatura: info.abreviatura,
      departamento_academico: info.departamento_academico,
      semestre: info.semestre,
      id_temario: info.id_temario,
      unidades: count.length,
      carrera: info.carrera,
    });

    return response.json({
      message: "Se creo la materia exitosamente",
      Materia: materia,
    });
  }

  async conGrupo({ response }) {
    const materias = await Database.table("materias")
      .distinct("materias.id", "nombre", "unidades")
      .innerJoin("grupos", "grupos.materia_id", "materias.id");
    return response.status(201).json(materias);
  }
}

module.exports = MateriaController;
