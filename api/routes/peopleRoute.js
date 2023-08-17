const { Router } = require('express');
const PeopleController = require('../controller/PeopleController.js');

const router = Router();

router.get('/people', PeopleController.pegaTodasAsPessoas)
router.get('/people/:id', PeopleController.pegaPorId)

module.exports = router;