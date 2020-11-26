"use strict";

const Instrumentaciondidacticaunidad = use(
  "App/Models/Instrumentaciondidacticaunidad"
);

class InstrumentaciondidacticaunidadController {
  async index({ request }) {
    const instrumentacion = request.all();
    return await Instrumentaciondidacticaunidad.query()
      .where("id_ins", "=", instrumentacion.id_ins)
      .fetch();
  }

  async store({ request, response }) {
    const info = request.all();
    for (let i in info.rows) {
      const elemento = Instrumentaciondidacticaunidad.query()
        .where(
          "id_ins",
          "=",
          dato[i].id_ins,
          "&&",
          "unidad",
          "=",
          dato[i].unidad
        )
        .fetch();
      console.log(elemento);
      if (true) {
        await Instrumentaciondidacticaunidad.create({
          id_ins: dato[i].id_ins,
          unidad: dato[i].unidad,
          actividades_aprendizaje: dato[i].actividades_aprendizaje,
          actividades_enseñanza: dato[i].actividades_enseñanza,
          desarrollo_competencias_genericas:
            dato[i].desarrollo_competencias_genericas,
          material_apoyo: dato[i].material_apoyo,
          semana_clases: dato[i].semana_clases,
          semana_evaluacion: dato[i].semana_evaluacion,
          comentario: dato[i].comentario,
        });
      } else {
        const indicadoresMod = await Instrumentaciondidacticaunidad.find().where(
          "id_ins",
          "=",
          dato[i].id_ins,
          "&&",
          "unidad",
          "=",
          dato[i].unidad
        );
        indicadoresMod.id_ins = dato[i].id_ins;
        indicadoresMod.unidad = dato[i].unidad;
        indicadoresMod.actividades_aprendizaje =
          dato[i].actividades_aprendizaje;
        indicadoresMod.actividades_enseñanza = dato[i].actividades_enseñanza;
        indicadoresMod.desarrollo_competencias_genericas =
          dato[i].desarrollo_competencias_genericas;
        indicadoresMod.material_apoyo = dato[i].material_apoyo;
        indicadoresModsemana_clases = dato[i].semana_clases;
        indicadoresMod.semana_evaluacion = dato[i].semana_evaluacion;
        indicadoresModcomentario = dato[i].comentario;
        await indicadoresMod.save();
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
