import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
// introduz o plugin express.json, que converte o json recebido
// em um objeto JavaScript 
app.use(express.json());
app.use(routes);

app.listen(3333);