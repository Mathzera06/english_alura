const express = require('express');
const routes = require('./api/routes')
const app = express();

routes(app);
const port = 7000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;