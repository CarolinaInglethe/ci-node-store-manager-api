const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const productsControllers = require('./controllers/productControllers');
const salesControllers = require('./controllers/salesControllers');

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
// Requesito 4 :
app.delete('/products/:id', productsControllers.deleteProduct);

// // Requesito 5:
app.post('/sales', salesControllers.create);
// // Requesito 6 :
app.get('/sales', salesControllers.getAll);
app.get('/sales/:id', salesControllers.getById);
// Requesito 7 :
app.put('/sales/:id', salesControllers.update);
// Requesito 8 :
app.delete('/sales/:id', salesControllers.deleteSale);

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));