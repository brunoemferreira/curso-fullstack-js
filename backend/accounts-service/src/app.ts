import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app = express();
// chegando a requisição o helmet faz um tratamento na requisição
app.use(helmet());
//
app.use(bodyParser.json());
// Porta de funcionamento do serviço
// Traz a porta das configurações de ambiente
const port = parseInt(`${process.env.PORT}`)
app.listen(port);
console.log(`Running on port ${port} !!!`);