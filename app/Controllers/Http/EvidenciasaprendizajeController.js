"use strict";
const Evidenciasaprendizaje = use('app/Models/Evidenciasaprendizaje.js')
class EvidenciasaprendizajeController {
  store({ request }) {
    const {
        id,
        nombre,
        ponderacion,
        evaluacion_formativa,
        id_instrumento_evaluacion,
        id_instrumentaciondidactica,
        unidad,
        //indexes
        id_instrumentaciondidactica,
        unidad,
    } = request.all();
      
    const evidenciasaprendizaje = Evidenciasaprendizaje.create({
        id,
        nombre,
        ponderacion,
        evaluacion_formativa,
        id_instrumento_evaluacion,
        id_instrumentaciondidactica,
        unidad,
        //indexes
        id_instrumentaciondidactica,
        unidad,
    });
    return evidenciasaprendizaje
  }
}

module.exports = EvidenciasaprendizajeController;