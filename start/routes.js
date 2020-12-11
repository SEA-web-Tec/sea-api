"use strict";

const { route } = require('@adonisjs/framework/src/Route/Manager');

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
  Route.get("grupos/:id", "GrupoController.index").middleware("auth");
  Route.post("grupos/crear", "GrupoController.store").middleware("auth");

  //Materias
  Route.post("materias/crear", "MateriaController.store").middleware("auth");

  //Temario
  Route.post("temario/crear", "TemarioController.store");
  Route.get("temario/consulta", "TemarioController.index");

  //Indicadores de alcence de ID
  Route.post("indicadoresalcance/crear", "IndicadoresalcanceController.store");
  Route.get(
    "indicadoresalcance/consulta",
    "IndicadoresalcanceController.index"
  );
  Route.put("indicadoresalcance/editar", "IndicadoresalcanceController.update");

  //ID para crear, consultar y buscar completos
  Route.post(
    "instrumentaciondidactica/crear",
    "InstrumentaciondidacticaController.store"
  );
  Route.get(
    "instrumentaciondidactica/consulta",
    "InstrumentaciondidacticaController.index"
  );
  Route.get(
    "instrumentaciondidactica/intrumentacion_completa",
    "InstrumentaciondidacticaController.intrumentacion_completa"
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
    "evidenciasaprendizaje/consulta",
    "EvidenciasaprendizajeController.index"
  );
  
  //Reactivos
  Route.post("reactivo/crear","ReactivosController.store");

  //rubricas
  Route.post(
    "rubrica/crear",
    "RubricaController.store"
  );
  //consulta las rubricas del usuario por su id
  Route.get(
    "rubrica/consultarubrica",
    "RubricaController.index"
  );
  //consulta los renglones de la rubrica por su id
  Route.get(
    "rubrica/consultarenglones",
    "RubricaController.show"
  );

  //listascotejo
  Route.post(
    "listacojeto/crear",
    "ListasdecotejoController.store"
  );
  //consulta las listas cotejo del usuario por su id
  Route.get(
    "listacotejo/consultalistacotejo",
    "ListasdecotejoController.index"
  );
  //consulta los renglones de la lista cotejo por su id
  Route.get(
    "listacotejo/consultarenglones",
    "ListasdecotejoController.show"
  );

  //listasobservaciones
  Route.post(
    "listasobservacion/crear",
    "ListasdeobservacionController.store"
  );
  //consulta las lista observacion del usuario por su id
  Route.get(
    "listasobservacion/consultalistasobservacion",
    "ListasdeobservacionController.index"
  );
  //consulta los renglones de la lista observacion por su id
  Route.get(
    "listasobservacion/consultarenglones",
    "ListasdeobservacionController.show"
  );
}).prefix("api/v1/");
