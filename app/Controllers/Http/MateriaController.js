"use strict";
const Materia = use("App/Models/Materia");
class MateriaController {
  async store({ request, response }) {
    // Solicitar informacion
    const info = request.all();

    const date = new Date();
    const materia = await Materia.create({
      nombre: info.nombre,
      abreviatura: info.abreviatura,
      departamento_academico: info.departamento_academico,
      creditos: info.creditos,
      horas_teoria: info.horas_teoria,
      horas_practica: info.horas_practica,
      semestre: info.semestre,
      plan: info.plan,
      id_temario: info.id_temario,
      modulo: info.modulo,
      creditos_requeridos: info.creditos_requeridos,
      objetivo: info.objetivo,
      captura_temario_activa: info.captura_temario_activa,
      intencion_didactica: info.intencion_didactica,
      competencias_especificas: info.competencias_especificas,
      competencias_genericas: info.competencias_genericas,
      competencias_previas: info.competencias_previas,
      bibliografia: info.bibliografia,
      updated_at: date,
    });
    return response.json({
      message: "Se creo la materia exitosamente",
      Materia: materia,
    });
  }
}

module.exports = MateriaController;
