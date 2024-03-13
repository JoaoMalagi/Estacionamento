const express = require('express')
const app = express()

const estacionamentoRoute = require('./routes/estacionamento.routes')
const clienteRoute = require('./routes/cliente.routes')
const dotenv = require('dotenv')

dotenv.config();
app.use(express.json())
app.use(estacionamentoRoute);
app.use(clienteRoute);
module.exports = app;