const Sequelize = require('sequelize');
const dataBase = require('../connection');

const Usuario = require('./Usuario');
const Sala = require('./Sala');
const Categoria = require('./Categoria');
const Repete = require('./Repete');

const Reserva = dataBase.define('Reserva', {
    reserva_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Usuario,
            key: 'usuario_id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        allowNull: false
    },
    sala_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Sala,
            key: 'sala_id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        allowNull: false
    },
    categoria_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Categoria,
            key: 'categoria_id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        allowNull: false
    },
    repete_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Repete,
            key: 'repete_id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
    },
    data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    hora_inicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hora_fim: {
        type: Sequelize.DATE,
        allowNull: false
    },
}, {
    tableName: 'Reservas',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

// Reserva.belongsTo(Usuario, Sala, Tipo, {
//     foreignKey: {
//         name: 'reserva_id',
//         allowNull: false
//     }
// });

// // Reserva.belongsTo(Sala, {
// //     foreignKey: {
// //         name: 'reserva_id',
// //         allowNull: false
// //     }
// // });
// // Reserva.belongsTo(Tipo, {
// //     foreignKey: {
// //         name: 'reserva_id',
// //         allowNull: false
// //     }
// // });

// Reserva.belongsTo(Repete, {
//     foreignKey: {
//         name: 'reserva_id'
//     }
// });

module.exports = Reserva;