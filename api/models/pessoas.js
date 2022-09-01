'use strict'
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: { 
      type: DataTypes.STRING,
      unique: true,
      // validação por função
      validate: {
        funcaoValidar: function(dados) {
          if(dados.length < 3) throw new Error(`Nome deve ter mais de 3 caracteres`)
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      //validação de e-mail
      validate: { 
        isEmail: {
          args: true,
          msg: 'email inválido'
        }
      }
    }, 
    role: DataTypes.STRING
  }, { 
    paranoid: true, // soft delete
    defaultScope: {
      where: { ativo: true } // filtra por pessoas onde ativo é true
    },
    scopes: {
      todos: { where: {}} // scope param
    }
   })
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id'
    })

  }
  return Pessoas
}