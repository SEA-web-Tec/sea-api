"use strict";

const Instrumentaciondidactica = use("App/Models/Instrumentaciondidactica");
const Grupo = use("App/Models/Grupo");
const Materia = use("App/Models/Materia");
const Instrumentaciondidacticaunidad = use(
  "App/Models/Instrumentaciondidacticaunidad"
);
const Database = use("Database");

class InstrumentaciondidacticaController {
  //solo el evaluador buscar todas las intrumentaciones Entregadas
  async index({ response }) {
    const Database = use("Database");
    const busqueda = await Database.table("instrumentaciondidacticas")
      .select(
        "instrumentaciondidacticas.id",
        "materias.nombre as materiaNombre",
        "usuarios.nombres",
        "apellidoPaterno",
        "apellidoMaterno",
        "grupos.grupo"
      )
      .innerJoin(
        "usuarios",
        "instrumentaciondidacticas.usuario_id",
        "usuarios.id"
      )
      .innerJoin("grupos", "instrumentaciondidacticas.grupo_id", "grupos.id")
      .innerJoin("materias", "grupos.materia_id", "materias.id")
      .where("estado", "Entregada");
    return response.status(201).json(busqueda);
  }

  //buscarIntrumentacion Seleccionada
  async buscarIntrumentacion({ response, params }) {
    const intrumentacion = await Instrumentaciondidactica.query()
      .where("id", params.id_ins)
      .first();
    const grupo = await Grupo.query()
      .where("id", intrumentacion.grupo_id)
      .fetch();
    const materia = await Materia.query()
      .where("id", grupo.toJSON()[0].materia_id)
      .first();
    const unidades = await Instrumentaciondidacticaunidad.query()
      .where("id_ins", params.id_ins)
      .fetch();
    return response.json({
      intrumentacion: intrumentacion,
      unidades: unidades,
      no_unidades: materia.unidades,
    });
  }

  //solo el evaluador
  async evaluar({ request, response }) {
    const info = request.all();
    console.log(info);
    let estado = "Aprobada";
    if (info.comentario != null) {
      estado = "Rechazada";
    }
    console.log(estado);
    await Instrumentaciondidactica.query().where("id", info.id_ins).update({
      estado: estado,
      comentario: info.comentario,
    });
    return response.json({
      mensaje: "Intrumentacion evaluada correctamente",
    });
  }

  async store({ request, response }) {
    const info = request.all();

    const elemento = await Instrumentaciondidactica.query()
      .where("grupo_id", info.grupo_id)
      .andWhere("usuario_id", info.usuario_id)
      .fetch();
    if (JSON.stringify(elemento) == "[]") {
      await Instrumentaciondidactica.create({
        grupo_id: info.grupo_id,
        usuario_id: info.usuario_id,
      });
    }
    const intrumentacion = await Instrumentaciondidactica.query()
      .where("grupo_id", info.grupo_id)
      .andWhere("usuario_id", info.usuario_id)
      .first();
    const grupo = await Grupo.query().where("id", info.grupo_id).fetch();
    const materia = await Materia.query()
      .where("id", grupo.toJSON()[0].materia_id)
      .first();

    const unidades = await Instrumentaciondidacticaunidad.query()
      .where("id_ins", intrumentacion.toJSON().id)
      .fetch();
    return response.json({
      intrumentacion: intrumentacion,
      unidades: unidades,
      no_unidades: materia.unidades,
    });
  }

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = InstrumentaciondidacticaController;
