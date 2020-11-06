"use strict";
const Indicadorponderacion = use('app/Models/Registrocambio.js')
class RegistrocambioController {
  store({ request }) {
    const {
      fecha,
      id_instrumentaciondidactica,
    } = request.all();
      
    const registrocambio = registrocambio.create({
      fecha,
      id_instrumentaciondidactica,
    });
    return registrocambio
  }
}

module.exports = RegistrocambioController;