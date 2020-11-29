"use strict";
const Indicadorponderacion = use("App/Models/Indicadorponderacion.js");
const Instrumentaciondidacticaunidad = use(
  "App/Models/Indicadorponderacion.js"
);

class IndicadorponderacionController {
  async index({ request }) {
    const instrumentacion = request.all();
    return await Instrumentaciondidacticaunidad.query()
      .where("id_ins", instrumentacion.id_ins)
      .fetch();
  }

  async store({ request, response }) {
    const info = request.all();
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
          comentario: info.unidades[i].comentario,
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
            comentario: info.unidades[i].comentario,
          });
      }
    }

    return response.json({
      message: "Se crearon las unidades de ID exitosamente",
    });
  }
}

module.exports = IndicadorponderacionController;
