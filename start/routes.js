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
  Route.post("temario/crear", "TemarioController.store");
  Route.get("temario/consulta", "TemarioController.index");

  //Indicadores de alcence de ID
  Route.post(
    "indicadoresalcance/crear",
    "IndicadoresalcanceController.store"
  ).middleware("auth");
  Route.get(
    "indicadoresalcance/consulta/",
    "IndicadoresalcanceController.index"
  );
  Route.put("indicadoresalcance/editar", "IndicadoresalcanceController.update");

  //ID para crear, consultar y buscar completos
  Route.post(
    "instrumentaciondidactica/crear",
    "InstrumentaciondidacticaController.store"
  );
  //Multiple
  Route.get(
    "instrumentaciondidactica/intrumentacion_completa",
    "InstrumentaciondidacticaController.intrumentacion_completa"
  );

  //ID solo para el evaluador
  Route.get(
    "instrumentaciondidactica/buscar_intrumentacion/:id_ins",
    "InstrumentaciondidacticaController.buscarIntrumentacion"
  );
  Route.get(
    "instrumentaciondidactica/consulta_intrumentaciones",
    "InstrumentaciondidacticaController.index"
  );
  Route.post(
    "instrumentaciondidactica/evaluar",
    "InstrumentaciondidacticaController.evaluar"
  );

  //ID para crear, consultar y buscar completos
  Route.post(
    "instrumentaciondidacticaunidad/crear",
    "InstrumentaciondidacticaunidadController.store"
  );
  Route.get(
    "instrumentaciondidacticaunidad/consulta",
    "InstrumentaciondidacticaunidadController.index"
  );
  Route.get(
    "instrumentaciondidacticaunidad/editar",
    "InstrumentaciondidacticaunidadController.update"
  );

  Route.post(
    "evidenciasaprendizaje/crear",
    "EvidenciasaprendizajeController.store"
  );
  Route.get(
    "evidenciasaprendizaje/consulta/:id_ins",
    "EvidenciasaprendizajeController.index"
  );
}).prefix("api/v1/");
