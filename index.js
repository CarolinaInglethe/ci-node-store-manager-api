const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const productsControllers = require('./controllers/productControllers');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Requesito 1: 
app.post('/products', productsControllers.create);

// Requesito 2 :
app.get('/products', productsControllers.getAll);
app.get('/products/:id', productsControllers.getById);

// Requesito 3 :
app.put('/products/:id', productsControllers.update);

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));