const { Router } = require('express');
const PeopleController = require('../controller/PeopleController.js');

const router = Router();

router.get('/people', PeopleController.pegaTodasAsPessoas)
router.get('/people/:id', PeopleController.pegaPorId)
router.post('/people', PeopleController.criaPessoa)
router.put('/people/:id', PeopleController.atualizaPessoa)
router.delete('/people/:id', PeopleController.apagaPessoa)
router.get('/people/:studentId/registration/:registrationId', PeopleController.pegaUmaMatricula)
router.post('/people/:studentId/registration', PeopleController.criaMatricula)
router.put('/people/:id', PeopleController.atualizaPessoa)
router.put('/people/:studentId/registration/:registrationId', PeopleController.atualizaMatricula)
router.delete('/people/:studentId/registration/:registrationId', PeopleController.apagaMatricula)
router.post('/people/:id/restaura', PeopleController.restauraPessoa)

module.exports = router;