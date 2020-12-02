"use strict";

const evidenciasaprendizaje = use("App/Models/Evidenciasaprendizaje.js");
const indicadorponderacion = use("App/Models/Indicadorponderacion.js");
const Indicadoresalcance = use("App/Models/Indicadoresalcance");
const Instrumentaciondidacticaunidad = use(
  "App/Models/Instrumentaciondidacticaunidad"
);

class EvidenciasaprendizajeController {
  async index({ request, response }) {
    const instrumentacion = request.all();
    const evidencia = await evidenciasaprendizaje
      .query()
      .where("id_ins", instrumentacion.id_ins)
      .fetch();
    const indicadores = await indicadorponderacion
      .query()
      .where("id_ins", instrumentacion.id_ins)
      .fetch();
    const indicadoresA = await Indicadoresalcance.query()
      .where("id_ins", "=", instrumentacion.id_ins)
      .fetch();
    const unidades = await Instrumentaciondidacticaunidad.query()
      .where("id_ins", instrumentacion.id_ins)
      .fetch();
    return response.json({
      evidencia: evidencia,
      indicadoresponderacion: indicadores,
      indicadoresalcance: indicadoresA,
      unidades: unidades,
    });
  }

  async store({ request, response }) {
    const info = request.all();
    await evidenciasaprendizaje
      .query()
      .where("id_ins", info.evidencias[0].id_ins)
      .delete();
    await indicadorponderacion
      .query()
      .where("id_ins", info.evidencias[0].id_ins)
      .delete();
    for (let i in info.evidencias) {
      const indicadoralcance = await Indicadoresalcance.query()
        .where("id_ins", "=", info.evidencias[0].id_ins)
        .andWhere("unidad", info.evidencias[i].unidad)
        .fetch();

      const evidencia = await evidenciasaprendizaje.create({
        nombre: info.evidencias[i].nombre,
        ponderacion: info.evidencias[i].ponderacion,
        evaluacion_formativa: info.evidencias[i].evaluacion_formativa,
        id_indicador: indicadoralcance.toJson().id,
        id_ins: info.evidencias[i].id_ins,
        unidad: info.evidencias[i].unidad,
      });

      await indicadorponderacion.create({
        id_evi: evidencia.toJSON().id,
        A: info.evidencias[i].indicadorponderacion.A,
        B: info.evidencias[i].indicadorponderacion.B,
        C: info.evidencias[i].indicadorponderacion.C,
        D: info.evidencias[i].indicadorponderacion.D,
        E: info.evidencias[i].indicadorponderacion.E,
        F: info.evidencias[i].indicadorponderacion.F,
        G: info.evidencias[i].indicadorponderacion.G,
        H: info.evidencias[i].indicadorponderacion.H,
        I: info.evidencias[i].indicadorponderacion.I,
        J: info.evidencias[i].indicadorponderacion.J,
        K: info.evidencias[i].indicadorponderacion.K,
        L: info.evidencias[i].indicadorponderacion.L,
        M: info.evidencias[i].indicadorponderacion.M,
        N: info.evidencias[i].indicadorponderacion.N,
        O: info.evidencias[i].indicadorponderacion.O,
        P: info.evidencias[i].indicadorponderacion.P,
        Q: info.evidencias[i].indicadorponderacion.Q,
        R: info.evidencias[i].indicadorponderacion.R,
        S: info.evidencias[i].indicadorponderacion.S,
        T: info.evidencias[i].indicadorponderacion.T,
        U: info.evidencias[i].indicadorponderacion.U,
        V: info.evidencias[i].indicadorponderacion.V,
        W: info.evidencias[i].indicadorponderacion.W,
        X: info.evidencias[i].indicadorponderacion.X,
        Y: info.evidencias[i].indicadorponderacion.Y,
        Z: info.evidencias[i].indicadorponderacion.Z,
        id_ins: info.evidencias[i].id_ins,
        unidad: info.evidencias[i].unidad,
      });
    }
    return response.json({
      message: "Las Evidencias fueron creadas con exito",
    });
  }
}

module.exports = EvidenciasaprendizajeController;
