'use strict'
const Grupo = use('App/Models/Grupo')
class GrupoController {
	async index({ auth }){
		const user = await auth.getUser()
		return await Grupo.query().where('usuario_id', user.id).fetch()
	}
	async store({ request, response }) {
		// Solicitar informacion
		const info = request.all()

		const date = new Date()
		const grupo = await Grupo.create({
			grupo: info.grupo,
			materia_id: 1,
			usuario_id: info.usuario_id,
			anio: info.anio,
			periodo: info.periodo,
			updated_at: date
		})
		return response.json({
			message: 'Se creo el grupo exitosamente',
			Grupo: grupo
		})
	}		
}

module.exports = GrupoController
