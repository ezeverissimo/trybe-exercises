const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const MESSAGE = process.env.MESSAGE || 'Erro na variavel de ambiente message!';

app.get('/', (req, res) => {
  return res.status(200).json({ message: MESSAGE });
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
})