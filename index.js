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

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));