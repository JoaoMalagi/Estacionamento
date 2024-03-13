const {Sequelize} = require('sequelize');

const db = require('../config/database');

const cliente = db.define('cliente', {
    id : {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome : {
        type:Sequelize.STRING,
        allowNull:false
    }

}
)

// cliente.sync({alter:true})
module.exports = cliente;

