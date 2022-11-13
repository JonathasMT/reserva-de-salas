const mongoose = require('mongoose');

const Reserva = mongoose.model('Reserva', {
    usuarioID: String,
    titulo: String,
    data: String,
    horaInicio: String,
    horaFim: String,
});

module.exports = Reserva;