const Sequelize = require('sequelize');
const baseDados = require('../connection');

const Usuario = require('./Usuario');
const Sala = require('./Sala');
const Categoria = require('./Categoria');
const Recorrencia = require('./Recorrencia');

const Reserva = baseDados.define('Reserva', {
    reserva_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
    },
    data: {
        type: Sequelize.DATEONLY(10),
        allowNull: false
    },
    hora_inicio: {
        type: Sequelize.STRING(5),
        allowNull: false
    },
    hora_fim: {
        type: Sequelize.STRING(5),
        allowNull: false
    },
}, {
    tableName: 'Reservas',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em',
    freezeTableName: true
});

Reserva.belongsTo(Usuario, {
    constraint: true,
    foreignKey: {
        name: 'usuario_id',
        allowNull: false
    }
});

Usuario.hasMany(Reserva, {
    foreignKey: 'usuario_id'
});
//------------------------------
Reserva.belongsTo(Sala, {
    constraint: true,
    foreignKey: {
        name:'sala_id',
        allowNull: false
    }
});

Sala.hasMany(Reserva, {
    foreignKey: 'sala_id'
});
//------------------------------
Reserva.belongsTo(Categoria, {
    constraint: true,
    foreignKey: {
        name: 'categoria_id',
        allowNull: false
    }
});

Categoria.hasMany(Reserva, {
    foreignKey: 'categoria_id'
});
//------------------------------
Reserva.belongsTo(Recorrencia, {
    constraint: true,
    foreignKey: {
        name: 'recorrencia_id',
        allowNull: true
    }
});

Recorrencia.hasOne(Reserva, {
    foreignKey: 'recorrencia_id'
});

module.exports = Reserva;