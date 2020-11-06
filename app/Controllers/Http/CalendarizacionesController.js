"use strict";
const Indicadorponderacion = use('app/Models/Calendarizaciones.js')
class CalendarizacionesController {
  store({ request }) {
    const {
        id_evidencia_aprendizaje,
        instrucciones,
        es_por_equipo,
        fecha_subida1ra,
        fecha_subida2da,
        fecha_limite1ra,
        fecha_limite2da,
    } = request.all();
      
    const calendarizaciones = calendarizaciones.create({
        id_evidencia_aprendizaje,
        instrucciones,
        es_por_equipo,
        fecha_subida1ra,
        fecha_subida2da,
        fecha_limite1ra,
        fecha_limite2da,
    });
    return calendarizaciones
  }
}

module.exports = CalendarizacionesController;