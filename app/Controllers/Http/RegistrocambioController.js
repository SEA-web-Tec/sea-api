"use strict";
const Registrocambio = use('app/Models/Registrocambio.js')
class RegistrocambioController {
  store({ request }) {
    const {
      fecha,
      id_instrumentaciondidactica,
    } = request.all();
      
    const registrocambio = Registrocambio.create({
      fecha,
      id_instrumentaciondidactica,
    });
    return registrocambio
  }
}

module.exports = RegistrocambioController;