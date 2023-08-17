const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 7000;

app.get('/teste', (req, res) => {
    res.status(200);
    res.send({message: 'Boas vindas a API'})
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;