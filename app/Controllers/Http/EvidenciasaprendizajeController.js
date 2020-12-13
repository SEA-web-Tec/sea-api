"use strict";

const evidenciasaprendizaje = use("App/Models/Evidenciasaprendizaje.js");
const indicadorponderacion = use("App/Models/Indicadorponderacion.js");
const Indicadoresalcance = use("App/Models/Indicadoresalcance");

class EvidenciasaprendizajeController {
  async index({ request, response, params }) {
    const evidencia = await evidenciasaprendizaje
      .query()
      .where("id_ins", params.id_ins)
      .fetch();
    const indicadores = await indicadorponderacion
      .query()
      .where("id_ins", params.id_ins)
      .fetch();
    const indicadoresA = await Indicadoresalcance.query()
      .where("id_ins", "=", params.id_ins)
      .fetch();
    return response.json({
      evidencia: evidencia,
      indicadoresponderacion: indicadores,
      indicadoresalcance: indicadoresA,
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
        .first();

      const evidencia = await evidenciasaprendizaje.create({
        nombre: info.evidencias[i].nombre,
        ponderacion: info.evidencias[i].ponderacion,
        evaluacion_formativa: info.evidencias[i].evaluacion_formativa,
        id_indicador: indicadoralcance.toJSON().id,
        id_ins: info.evidencias[i].id_ins,
        unidad: info.evidencias[i].unidad,
      });

      await indicadorponderacion.create({
        id_evi: evidencia.toJSON().id,
        A: info.indicadorponderacion[i].A,
        B: info.indicadorponderacion[i].B,
        C: info.indicadorponderacion[i].C,
        D: info.indicadorponderacion[i].D,
        E: info.indicadorponderacion[i].E,
        F: info.indicadorponderacion[i].F,
        G: info.indicadorponderacion[i].G,
        H: info.indicadorponderacion[i].H,
        I: info.indicadorponderacion[i].I,
        J: info.indicadorponderacion[i].J,
        K: info.indicadorponderacion[i].K,
        L: info.indicadorponderacion[i].L,
        M: info.indicadorponderacion[i].M,
        N: info.indicadorponderacion[i].N,
        O: info.indicadorponderacion[i].O,
        P: info.indicadorponderacion[i].P,
        Q: info.indicadorponderacion[i].Q,
        R: info.indicadorponderacion[i].R,
        S: info.indicadorponderacion[i].S,
        T: info.indicadorponderacion[i].T,
        U: info.indicadorponderacion[i].U,
        V: info.indicadorponderacion[i].V,
        W: info.indicadorponderacion[i].W,
        X: info.indicadorponderacion[i].X,
        Y: info.indicadorponderacion[i].Y,
        Z: info.indicadorponderacion[i].Z,
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
