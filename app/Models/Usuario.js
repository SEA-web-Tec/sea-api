'use strict'
/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
    static boot () {
        super.boot()
    
        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (userInstance) => {
          if (userInstance.dirty.contrasenia) {
            userInstance.contrasenia = await Hash.make(userInstance.contrasenia)
          }
        })
      }
    
      tokens () {
        return this.hasMany('App/Models/Token')
      }
      grupos () {
        return this.hasMany('App/Models/Grupo')
      }
}

module.exports = Usuario
