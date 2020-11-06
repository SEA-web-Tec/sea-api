"use strict";
const Indicadorponderacion = use('app/Models/Reactivos.js')
class ReactivosController {
  store({ request }) {
    const {
      id,
      id_maestro,
      id_materia,
      tema,
      tipo,
      texto_reactivo,
      respuesta_correcta,
      fecha_creacion,
    } = request.all();
      
    const reactivos = reactivos.create({
      id,
      id_maestro,
      id_materia,
      tema,
      tipo,
      texto_reactivo,
      respuesta_correcta,
      fecha_creacion,
    });
    return reactivos
  }
}

module.exports = ReactivosController;