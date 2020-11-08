'use strict'
const Grupo = use('App/Models/Grupo')
class GrupoController {
	async store({ request, response }) {
		// Solicitar informacion
		const info = request.all()

		const date = new Date()
		const grupo = await Grupo.create({
			grupo: info.grupo,
			materia_id: 1111111,
			maestro_id: 1111111,
			anio: info.anio,
			periodo: info.periodo,
			gestion_del_curso: info.gestion_del_curso,
			id_intrumentaciondidactica: 1111111,
			id_profesor_evaluador: 1111111,
			fecha_cambio: date,
			updated_at: date
		})
		return response.json({
			message: 'Se creo el grupo exitosamente',
			Grupo: grupo
		})
	}		
}

module.exports = GrupoController
