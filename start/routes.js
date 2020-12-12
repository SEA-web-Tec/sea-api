"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.group(() => {
  // Auth
  Route.post("auth/registrar", "UsuarioController.signup");
  Route.post("auth/login", "UsuarioController.login");

  // Perfil
  Route.get("usuarios/:id", "UsuarioController.profile").middleware("auth");
  Route.patch("usuarios/:id/editar", "UsuarioController.update").middleware(
    "auth"
  );

  // Grupos
  Route.post("grupos/crear", "GrupoController.store").middleware("auth");
  Route.get("grupos/consulta", "GrupoController.index").middleware("auth");

  //Materias
  Route.post("materias/crear", "MateriaController.store").middleware("auth");

  //Temario
  Route.post("temario/crear", "TemarioController.store").middleware("auth");
  Route.get("temario/consulta", "TemarioController.index").middleware("auth");

  //Indicadores de alcence de ID
  Route.post("indicadoresalcance/crear", "IndicadoresalcanceController.store")
    .middleware("auth")
    .middleware("auth");
  Route.get(
    "indicadoresalcance/consulta/",
    "IndicadoresalcanceController.index"
  ).middleware("auth");
  Route.put(
    "indicadoresalcance/editar",
    "IndicadoresalcanceController.update"
  ).middleware("auth");

  //ID para crear, consultar y buscar completos
  Route.post(
    "instrumentaciondidactica/crear",
    "InstrumentaciondidacticaController.store"
  ).middleware("auth");
  //Multiple
  Route.get(
    "instrumentaciondidactica/intrumentacion_completa",
    "InstrumentaciondidacticaController.intrumentacion_completa"
  ).middleware("auth");

  //ID solo para el evaluador
  Route.get(
    "instrumentaciondidactica/buscar_intrumentacion/:id_ins",
    "InstrumentaciondidacticaController.buscarIntrumentacion"
  ).middleware("auth");
  Route.get(
    "instrumentaciondidactica/consulta_intrumentaciones",
    "InstrumentaciondidacticaController.index"
  ).middleware("auth");
  Route.post(
    "instrumentaciondidactica/evaluar",
    "InstrumentaciondidacticaController.evaluar"
  ).middleware("auth");

  //ID para crear, consultar y buscar completos
  Route.post(
    "instrumentaciondidacticaunidad/crear",
    "InstrumentaciondidacticaunidadController.store"
  ).middleware("auth");
  Route.get(
    "instrumentaciondidacticaunidad/consulta",
    "InstrumentaciondidacticaunidadController.index"
  ).middleware("auth");
  Route.get(
    "instrumentaciondidacticaunidad/editar",
    "InstrumentaciondidacticaunidadController.update"
  ).middleware("auth");

  Route.post(
    "evidenciasaprendizaje/crear",
    "EvidenciasaprendizajeController.store"
  ).middleware("auth");
  Route.get(
    "evidenciasaprendizaje/consulta/:id_ins",
    "EvidenciasaprendizajeController.index"
  ).middleware("auth");
}).prefix("api/v1/");
