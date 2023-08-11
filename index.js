//const { request, response } = require('express');
const express = require ('express');
const cors = require('cors');

const router = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

//const porta = process.env.PORT || 3333;

const porta = 3306;

//define a porta - ver qual está disponível no servidor
app.listen(porta, () =>{
    //console.log('Env: ' + process.env.PORT); // outro jeito de gerar log de funcionamento do servidor
    console.log('Servidor iniciado na porta: ' + porta); 
});

app.get('/', (request, response) => {
    response.send('Conectado!');
});