const{listar, criar} = require('../controller/estacionamento.controller')

const router = require('express-promise-router')();

router.get('/estacionamento/', listar);
router.post('/estacionamento/', criar);

module.exports = router;