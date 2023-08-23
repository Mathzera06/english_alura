const { Router } = require('express');
const ClassesController = require('../controller/ClassesController.js')

const router = Router();

router.get('/classes', ClassesController.pegaTodasAsClasses)
router.get('/classes/:id', ClassesController.pegaPorId)
router.post('/classes', ClassesController.criaClasse)
router.put('/classes/:id', ClassesController.atualizaClasse)
router.delete('/classes/:id', ClassesController.apagaClasse)

module.exports = router;