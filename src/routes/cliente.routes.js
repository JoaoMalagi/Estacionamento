const{listar, criar} = require('../controller/estacionamento.controller')

const router = require('express-promise-router')();

router.get('/cliente/', listar);
router.post('/cliente/', criar);

module.exports = router;