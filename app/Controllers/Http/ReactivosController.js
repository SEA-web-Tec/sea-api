"use strict";
const Reactivos = use('App/Models/Reactivos.js')
class ReactivosController {
  async store({ request, response }) {
    //try {
    //solicitar info
    const info = request.all();
    /*const reactivos = Reactivos.create({
      id,
      id_maestro,
      id_materia,
      unidad,
      tipo,
      texto_reactivo,
      respuesta_correcta,
    });
    return reactivos;*/
    
    const reactivos = await Reactivos.create({
      id: info.id,
      id_maestro: info.id_maestro,
      id_materia: info.id_materia,
      unidad: info.unidad,
      tipo: info.tipo,
      texto_reactivo: info.texto_reactivo,
      respuesta_correcta: info.respuesta_correcta,
    });
    return response.json({
      message: "Se creo el reactivo exitosamente",
      Reactivo: reactivos,
    });
    } /*catch (error) {
      return response.json({
        message:"Ha ocurrido un error en el servidor"
      });*/
    //}
  //}
}

module.exports = ReactivosController;