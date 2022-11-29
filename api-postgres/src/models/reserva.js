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
    // usuario_id: {
    //     type: Sequelize.INTEGER,
    //     // references: {
    //     //     model: Usuario,
    //     //     key: 'usuario_id',
    //     //     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //     // },
    //     allowNull: false
    // },
    // sala_id: {
    //     type: Sequelize.INTEGER,
    //     // references: {
    //     //     model: Sala,
    //     //     key: 'sala_id',
    //     //     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //     // },
    //     allowNull: false
    // },
    // categoria_id: {
    //     type: Sequelize.INTEGER,
    //     // references: {
    //     //     model: Categoria,
    //     //     key: 'categoria_id',
    //     //     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //     // },
    //     allowNull: false
    // },
    // repete_id: {
    //     type: Sequelize.INTEGER,
    //     // references: {
    //     //     model: Repete,
    //     //     key: 'repete_id',
    //     //     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //     // }
    // },
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
    updatedAt: 'atualizado_em'
});

Reserva.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'usuario_id'
});

Usuario.hasMany(Reserva, {
    foreignKey: 'usuario_id'
});
//------------------------------
Reserva.belongsTo(Sala, {
    constraint: true,
    foreignKey: 'sala_id'
});

Sala.hasMany(Reserva, {
    foreignKey: 'sala_id'
});
//------------------------------
Reserva.belongsTo(Categoria, {
    constraint: true,
    foreignKey: 'categoria_id'
});

Categoria.hasMany(Reserva, {
    foreignKey: 'categoria_id'
});
//------------------------------
Reserva.belongsTo(Repete, {
    constraint: true,
    foreignKey: 'repete_id'
});

Repete.hasOne(Reserva, {
    foreignKey: 'repete_id'
});



// Usuario.hasMany(Reserva, {
//     foreignKey: {
//         name: 'usuario_id'
//     }
// });
// Reserva.belongsTo(Usuario);
// //------------------------------
// Sala.hasMany(Reserva, {
//     foreignKey: {
//         name: 'sala_id'
//     }
// });
// Reserva.belongsTo(Sala);
// //------------------------------
// Categoria.hasMany(Reserva, {
//     foreignKey: {
//         name: 'categoria_id'
//     }
// });
// Reserva.belongsTo(Categoria);
// //------------------------------
// Repete.hasOne(Reserva, {
//     foreignKey: {
//         name: 'repete_id'
//     }
// });
// Reserva.belongsTo(Repete);

module.exports = Reserva;