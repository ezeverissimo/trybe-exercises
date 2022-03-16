const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.status(200).send('Está vivo!!!');
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
})