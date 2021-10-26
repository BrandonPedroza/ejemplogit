const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    carne:{
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        trim: true,
    },
    curso_proyecto: {
        type: String,
        trim: true
    },
    cuerpo: {
        type: String,
        trim: true,
    },
    procesado: {
        type: String,
        trim: true,
        required: false
    },
    fecha: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Task',TaskSchema);