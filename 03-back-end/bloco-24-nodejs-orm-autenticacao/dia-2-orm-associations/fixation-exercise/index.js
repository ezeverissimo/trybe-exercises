const express = require('express');
const { Address, Employee } = require('./models');
require('dotenv').config();

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Address.findAll({
      include: { model: Employee, as: 'employees' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;