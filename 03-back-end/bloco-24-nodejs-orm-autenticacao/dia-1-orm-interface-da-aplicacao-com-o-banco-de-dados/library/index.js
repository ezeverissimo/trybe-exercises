const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const booksController = require('./controllers/booksController');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT

app.get('/books', booksController.findAll);
app.get('/books/:id', booksController.findById);
app.post('/books', booksController.create);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
