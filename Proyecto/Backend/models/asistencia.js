const mongoose = require('mongoose');
const Asistencia = new mongoose.Schema({
    carne:{
        type: String,
        trim: true
    },
    nombre_estudiante: {
        type: String,
        trim: true,
    },
    nombre_evento: {
        type: String,
        trim: true
    },
    id: {
        type: Number,
        required: false
    },
    imagen: {
        type: String,
        trim: true,
    },
    fecha: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Asistencia',Asistencia);