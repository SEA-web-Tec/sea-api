"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.group(() => {
  // Grupos
  Route.post("grupos/crear", "GrupoController.store").middleware("auth");
  Route.get("grupos/consulta", "GrupoController.index").middleware("auth");

  // Auth
  Route.post("auth/registrar", "UsuarioController.store");
  Route.post("auth/login", "UsuarioController.login")

  //Materias
  Route.post("materias/crear", "MateriaController.store").middleware("auth");

  //Temario
  Route.post("temario/crear", "TemarioController.store");
  Route.get("temario/consulta", "TemarioController.index");
}).prefix("api/v1/");
