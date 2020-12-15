"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.group(() => {
  // Auth
  Route.post("auth/registrar", "UsuarioController.signup");
  Route.post("auth/login", "UsuarioController.login");

  // Perfil
  Route.get("usuarios", "UsuarioController.index").middleware("auth");
  Route.get("usuarios/:id", "UsuarioController.profile").middleware("auth");
  Route.patch("usuarios/:id/editar", "UsuarioController.update").middleware(
    "auth"
  );

  // Grupos
  Route.get("grupos", "GrupoController.index").middleware("auth");
  Route.get("grupos/:id", "GrupoController.show").middleware("auth");
  Route.post("grupos/crear", "GrupoController.store").middleware("auth");

  // Materias
  Route.get("materias", "MateriaController.index").middleware("auth");
  Route.post("materias/crear", "MateriaController.store").middleware("auth");
  Route.get("materias/con-grupo", "MateriaController.conGrupo").middleware(
    "auth"
  );

  //Reactivos
  Route.get("reactivos/todo/:id_materia/", "ReactivosController.index");
  Route.get("reactivos/:id_materia/:unidad", "ReactivosController.specific");
  Route.post("reactivos/crear", "ReactivosController.store");

  // Examenes
  Route.get("examenes", "ExameneController.index").middleware("auth");
  Route.post("examenes/crear", "ExameneController.store").middleware("auth");

  // Temario
  Route.get("temarios", "TemarioController.index").middleware("auth");
  Route.post("temarios/crear", "TemarioController.store").middleware("auth");

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
  );

  //rubricas
  Route.post("rubrica/crear", "RubricaController.store");

  //consulta las rubricas del usuario por su id
  Route.get("rubrica/consultarubrica/:id_usuario", "RubricaController.index");

  //consulta los renglones de la rubrica por su id
  Route.get("rubrica/consultarenglones/:id_rubrica", "RubricaController.show");

  //consulta datos de una rubrica en especifico sin renglones
  Route.get("rubrica/consultarub/:id", "RubricaController.consultarubrica");

  //borra una rubrica con sus renglones
  Route.delete("rubrica/borrarrubrica/:id", "RubricaController.destroy");

  //editar todos los datos de una rubrica
  Route.post("rubrica/editar/:id", "RubricaController.editar");

  //listascotejo
  Route.post("listacojeto/crear", "ListasdecotejoController.store");

  //consulta las listas cotejo del usuario por su id
  Route.get(
    "listacotejo/consultalistacotejo/:id_usuario",
    "ListasdecotejoController.index"
  );

  //consulta los renglones de la lista cotejo por su id
  Route.get(
    "listacotejo/consultarenglones/:id_cotejo",
    "ListasdecotejoController.show"
  );

  //consulta datos de una lc en especifico sin renglones
  Route.get(
    "listacotejo/consultalc/:id",
    "ListasdecotejoController.consultalc"
  );

  //borra una lista cotejo con sus renglones
  Route.delete("listacotejo/borrarlo/:id", "ListasdecotejoController.destroy");

  //editar todos los datos de una lista de cotejo
  Route.post("listacotejo/editar/:id", "ListasdecotejoController.editar");

  //listasobservaciones
  Route.post("listasobservacion/crear", "ListasdeobservacionController.store");

  //consulta las lista observacion del usuario por su id
  Route.get(
    "listasobservacion/consultalistasobservacion/:id_usuario",
    "ListasdeobservacionController.index"
  );

  //consulta los renglones de la lista observacion por su id
  Route.get(
    "listasobservacion/consultarenglones/:id_observacion",
    "ListasdeobservacionController.show"
  );

  //consulta datos de una lo en especifico sin renglones
  Route.get(
    "listasobservacion/consultalo/:id",
    "ListasdeobservacionController.consultalo"
  );

  //borra una lista observacion con sus renglones
  Route.delete(
    "listasobservacion/borrarlo/:id",
    "ListasdeobservacionController.destroy"
  );

  //editar todos los datos de una lista de observacion
  Route.post(
    "listasobservacion/editar/:id",
    "ListasdeobservacionController.editar"
  );
}).prefix("api/v1/");
