"use strict";
const Indicadorponderacion = use('app/Models/Indicadorponderacion.js')
class IndicadorponderacionController {
  store({ request }) {
    const {
      id_evidenciaaprendizaje,
      letra,
      ponderacion,
    } = request.all();
      
    const indicadorponderacion = Indicadorponderacion.create({
      id_evidenciaaprendizaje,
      letra,
      ponderacion,
    });
    return indicadorponderacion
  }
}

module.exports = IndicadorponderacionController;