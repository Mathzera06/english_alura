const { Router } = require('express');
const PeopleController = require('../controller/PeopleController.js');

const router = Router();

router.get('/people', PeopleController.pegaTodasAsPessoas)
router.get('/people/:id', PeopleController.pegaPorId)
router.post('/people', PeopleController.criaPessoa)
router.put('/people/:id', PeopleController.atualizaPessoa)
router.delete('/people/:id', PeopleController.apagaPessoa)

module.exports = router;