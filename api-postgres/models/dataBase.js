const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'reserva',
    'reserva',
    'teste', {
    host: '168.138.251.14',
    dialect: 'postgres'
    }
);

sequelize.autheticate()
.then((resultado) => {
    console.log('Conectado ao banco de dados! ' + resultado);
}).catch((erro) => {
    console.log('Erro ao conectar ao banco de dados \n'+erro);
});

module.exports = sequelize;