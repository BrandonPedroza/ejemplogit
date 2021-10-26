const express = require('express');

const { main,
        getTask, 
        postTask,
        getTaskCarne
      } = require('../controllers/tasks');

const router = express.Router();

router
    .route('/')
        .get(main)
        
        
router
    .route('/task')
    .post(postTask)
    .get(getTask)

router
    .route('/task/:carne')
    .get(getTaskCarne)

module.exports = router;