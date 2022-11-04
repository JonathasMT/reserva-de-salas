const mongoose = require('mongoose');

const Booking = mongoose.model('Booking', {
    userId: String,
    title: String,
    date: String,
    timeStart: String,
    timeEnd: String,
});

module.exports = Booking;