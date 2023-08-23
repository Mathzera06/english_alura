const { Router } = require('express');
const LevelsController = require('../controller/LevelsController.js')

const router = Router();

router.get('/levels', LevelsController.pegaTodasOsNiveis)
router.get('/levels/:id', LevelsController.pegaPorId)
router.post('/levels', LevelsController.criaLevel)
router.put('/levels/:id', LevelsController.atualizaLevel)
router.delete('/levels/:id', LevelsController.apagaLevel)

module.exports = router;