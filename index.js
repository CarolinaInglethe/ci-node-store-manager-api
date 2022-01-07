const express = require('express');
const bodyParser = require('body-parser');
const productsControllers = require('./controllers/productControllers');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Requesito 1:
app.post('/products', productsControllers.create);

app.listen(PORT, () => console.log(`Online , Porta: ${PORT}`));