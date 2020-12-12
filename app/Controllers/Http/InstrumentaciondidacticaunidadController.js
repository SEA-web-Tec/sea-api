"use strict";

const Instrumentaciondidacticaunidad = use(
  "App/Models/Instrumentaciondidacticaunidad"
);
const Instrumentaciondidactica = use("App/Models/Instrumentaciondidactica");

class InstrumentaciondidacticaunidadController {
  async index({ request }) {
    const instrumentacion = request.all();
    return await Instrumentaciondidacticaunidad.query()
      .where("id_ins", instrumentacion.id_ins)
      .fetch();
  }

  //solo el evaluador

  async store({ request, response }) {
    const info = request.all();
    await Instrumentaciondidactica.query()
      .where("id", info.unidades[0].id_ins)
      .update({
        estado: "Entregada",
      });
    for (let i in info.unidades) {
      const elemento = await Instrumentaciondidacticaunidad.query()
        .where("id_ins", info.unidades[i].id_ins)
        .andWhere("unidad", info.unidades[i].unidad)
        .fetch();
      if (JSON.stringify(elemento) == "[]") {
        await Instrumentaciondidacticaunidad.create({
          id_ins: info.unidades[i].id_ins,
          unidad: info.unidades[i].unidad,
          actividades_aprendizaje: info.unidades[i].actividades_aprendizaje,
          actividades_enseñanza: info.unidades[i].actividades_enseñanza,
          desarrollo_competencias_genericas:
            info.unidades[i].desarrollo_competencias_genericas,
          material_apoyo: info.unidades[i].material_apoyo,
          semana_clases: info.unidades[i].semana_clases,
          semana_evaluacion: info.unidades[i].semana_evaluacion,
        });
      } else {
        await Instrumentaciondidacticaunidad.query()
          .where("id_ins", info.unidades[i].id_ins)
          .andWhere("unidad", info.unidades[i].unidad)
          .update({
            id_ins: info.unidades[i].id_ins,
            unidad: info.unidades[i].unidad,
            actividades_aprendizaje: info.unidades[i].actividades_aprendizaje,
            actividades_enseñanza: info.unidades[i].actividades_enseñanza,
            desarrollo_competencias_genericas:
              info.unidades[i].desarrollo_competencias_genericas,
            material_apoyo: info.unidades[i].material_apoyo,
            semana_clases: info.unidades[i].semana_clases,
            semana_evaluacion: info.unidades[i].semana_evaluacion,
          });
      }
    }

    return response.json({
      message: "Se crearon las unidades de ID exitosamente",
    });
  }

  async edit({ params, request, response, view }) {}

  //Crear o editar
  /*Revisar si existen (si existe regresar), si no crear las
  intrumentaciones segun el numero de unidades*/
}

module.exports = InstrumentaciondidacticaunidadController;
