"use strict";

const Indicadoresalcance = use("App/Models/Indicadoresalcance");

class IndicadoresalcanceController {
  //buscar indice
  async index({ request }) {
    const indicador_id = request.all();
    return await Indicadoresalcance.query()
      .where("id", "=", indicador_id.id)
      .fetch();
  }

  //guardar
  async store({ request, response }) {
    const info = request.all();
    const indicadores = await Indicadoresalcance.create({
      A: info.A,
      B: info.B,
      C: info.C,
      D: info.D,
      E: info.E,
      F: info.F,
      G: info.G,
      H: info.H,
      I: info.I,
      J: info.J,
      K: info.K,
      L: info.L,
      M: info.M,
      N: info.N,
      O: info.O,
      P: info.P,
      Q: info.Q,
      R: info.R,
      S: info.S,
      T: info.T,
      U: info.U,
      V: info.V,
      W: info.W,
      X: info.X,
      Y: info.Y,
      Z: info.Z,
    });
    return response.json({
      message: "Se creo el indicador de alcance de la unidad exitosamente",
      Indicadoresalcance: indicadores,
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
    await indicadoresMod.save();
    return response.json({
      message: "Se modifico el alcance de la unidad exitosamente",
      Indicadoresalcance: indicadoresMod,
    });
  }

  async destroy({ params, request, response }) {}
}

module.exports = IndicadoresalcanceController;
