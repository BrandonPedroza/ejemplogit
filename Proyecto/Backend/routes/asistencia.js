const express = require('express');

const { 
        postAsistencia,
        getAsistencias,
        getAsistenciaxCarne,
        getAsistenciaxEvento
      } = require('../controllers/asistencia');

const router = express.Router();

router
    .route('/asistencia')
    .post(postAsistencia)
    .get(getAsistencias)

router
    .route('/asistencia/carne/:id')
    .get(getAsistenciaxCarne)

router
    .route('/asistencia/evento/:id')
    .get(getAsistenciaxEvento)

module.exports = router;