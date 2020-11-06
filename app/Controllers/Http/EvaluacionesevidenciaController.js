"use strict";
const Indicadorponderacion = use('app/Models/Evaluacionesevidencias.js')
class EvaluacionesevidenciasController {
  store({ request }) {
    const {
        id,
        id_evidencia_aprendizaje,
        id_alumno,
        oportunidad,
        calificacion,
        observaciones,
      //Indexes
      id_evidencia_aprendizaje,
    } = request.all();
      
    const evaluacionesevidencias = evaluacionesevidencias.create({
        id,
        id_evidencia_aprendizaje,
        id_alumno,
        oportunidad,
        calificacion,
        observaciones,
      //Indexes
      id_evidencia_aprendizaje,
    });
    return evaluacionesevidencias
  }
}

module.exports = EvaluacionesevidenciasController;