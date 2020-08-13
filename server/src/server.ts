import express from 'express';
import routes from './routes';

const app = express();

// introduz o plugin express.json, que converte o json recebido
// em um objeto JavaScript 
app.use(express.json());
app.use(routes);

app.listen(3333);
