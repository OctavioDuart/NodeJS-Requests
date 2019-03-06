const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(require('./route'));


app.listen(PORT, (err) => {
    (err) ?
        console.error(`Ocorreu o seguinte erro ao iniciar o servidor : ${err}`)
        :
        console.log(`Servidor iniciado com sucesso na porta ${PORT}`);
});