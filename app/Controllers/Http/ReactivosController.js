"use strict";
const Reactivos = use('app/Models/Reactivos.js')
class ReactivosController {
  store({ request }) {
    const {
      id,
      id_maestro,
      id_materia,
      unidad,
      tipo,
      texto_reactivo,
      respuesta_correcta,
    } = request.all();
      
    const reactivos = Reactivos.create({
      id,
      id_maestro,
      id_materia,
      unidad,
      tipo,
      texto_reactivo,
      respuesta_correcta,
    });
    return reactivos
  }
}

module.exports = ReactivosController;