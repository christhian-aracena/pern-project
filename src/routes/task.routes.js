const { Router } = require('express');
const { createTask, getTask, getTasks, deleteTask, updateTask } = require('../controllers/task.controllers');

const router = Router();



router.get('/task/', getTasks);

router.get('/task/:id', getTask)

router.post('/task/', createTask);

router.delete('/task/:id', deleteTask)

router.put('/task/:id', updateTask)

module.exports = router;