"use strict";

const Indicadoresalcance = use("App/Models/Indicadoresalcance");

class IndicadoresalcanceController {
  //buscar indice
  async index({ request }) {
    const indicador_id = request.all();
    return await Indicadoresalcance.query()
      .where("id_ins", "=", indicador_id.id_ins)
      .fetch();
  }

  async indexInd({ request }) {
    const indicador_id = request.all();
    return await Indicadoresalcance.query()
      .where("id", "=", indicador_id.id)
      .fetch();
  }

  //guardar
  async store({ request, response }) {
    const info = request.all();
    for (let i in info.indicadoresalcance) {
      const elemento = await Indicadoresalcance.query()
        .where("id_ins", info.id_ins)
        .andWhere("unidad", info.indicadoresalcance[i].unidad)
        .fetch();
      if (JSON.stringify(elemento) == "[]") {
        await Indicadoresalcance.create({
          A: info.indicadoresalcance[i].A,
          B: info.indicadoresalcance[i].B,
          C: info.indicadoresalcance[i].C,
          D: info.indicadoresalcance[i].D,
          E: info.indicadoresalcance[i].E,
          F: info.indicadoresalcance[i].F,
          G: info.indicadoresalcance[i].G,
          H: info.indicadoresalcance[i].H,
          I: info.indicadoresalcance[i].I,
          J: info.indicadoresalcance[i].J,
          K: info.indicadoresalcance[i].K,
          L: info.indicadoresalcance[i].L,
          M: info.indicadoresalcance[i].M,
          N: info.indicadoresalcance[i].N,
          O: info.indicadoresalcance[i].O,
          P: info.indicadoresalcance[i].P,
          Q: info.indicadoresalcance[i].Q,
          R: info.indicadoresalcance[i].R,
          S: info.indicadoresalcance[i].S,
          T: info.indicadoresalcance[i].T,
          U: info.indicadoresalcance[i].U,
          V: info.indicadoresalcance[i].V,
          W: info.indicadoresalcance[i].W,
          X: info.indicadoresalcance[i].X,
          Y: info.indicadoresalcance[i].Y,
          Z: info.indicadoresalcance[i].Z,
          id_ins: info.id_ins,
          unidad: info.indicadoresalcance[i].unidad,
        });
      } else {
        await Indicadoresalcance.query()
          .where("id_ins", info.id_ins)
          .andWhere("unidad", info.indicadoresalcance[i].unidad)
          .update({
            A: info.indicadoresalcance[i].A,
            B: info.indicadoresalcance[i].B,
            C: info.indicadoresalcance[i].C,
            D: info.indicadoresalcance[i].D,
            E: info.indicadoresalcance[i].E,
            F: info.indicadoresalcance[i].F,
            G: info.indicadoresalcance[i].G,
            H: info.indicadoresalcance[i].H,
            I: info.indicadoresalcance[i].I,
            J: info.indicadoresalcance[i].J,
            K: info.indicadoresalcance[i].K,
            L: info.indicadoresalcance[i].L,
            M: info.indicadoresalcance[i].M,
            N: info.indicadoresalcance[i].N,
            O: info.indicadoresalcance[i].O,
            P: info.indicadoresalcance[i].P,
            Q: info.indicadoresalcance[i].Q,
            R: info.indicadoresalcance[i].R,
            S: info.indicadoresalcance[i].S,
            T: info.indicadoresalcance[i].T,
            U: info.indicadoresalcance[i].U,
            V: info.indicadoresalcance[i].V,
            W: info.indicadoresalcance[i].W,
            X: info.indicadoresalcance[i].X,
            Y: info.indicadoresalcance[i].Y,
            Z: info.indicadoresalcance[i].Z,
            id_ins: info.id_ins,
            unidad: info.indicadoresalcance[i].unidad,
          });
      }
    }
    return response.json({
      message: "Se crearon el indicador de alcance de la unidad exitosamente",
    });
  }

  async update({ request, response }) {
    const info = request.all();
    const indicadoresMod = await Indicadoresalcance.find(info.id);
    indicadoresMod.A = info.A;
    indicadoresMod.B = info.B;
    indicadoresMod.C = info.C;
    indicadoresMod.D = info.D;
    indicadoresMod.E = info.E;
    indicadoresMod.F = info.F;
    indicadoresMod.G = info.G;
    indicadoresMod.H = info.H;
    indicadoresMod.I = info.I;
    indicadoresMod.J = info.J;
    indicadoresMod.K = info.K;
    indicadoresMod.L = info.L;
    indicadoresMod.M = info.M;
    indicadoresMod.N = info.N;
    indicadoresMod.O = info.O;
    indicadoresMod.P = info.P;
    indicadoresMod.Q = info.Q;
    indicadoresMod.R = info.R;
    indicadoresMod.S = info.S;
    indicadoresMod.T = info.T;
    indicadoresMod.U = info.U;
    indicadoresMod.V = info.V;
    indicadoresMod.W = info.W;
    indicadoresMod.X = info.X;
    indicadoresMod.Y = info.Y;
    indicadoresMod.Z = info.Z;
    indicadoresMod.id_ins = info.id_ins;
    await indicadoresMod.save();
    return response.json({
      message: "Se modifico el alcance de la unidad exitosamente",
      Indicadoresalcance: indicadoresMod,
    });
  }

  async destroy({ params, request, response }) {}
}

module.exports = IndicadoresalcanceController;
