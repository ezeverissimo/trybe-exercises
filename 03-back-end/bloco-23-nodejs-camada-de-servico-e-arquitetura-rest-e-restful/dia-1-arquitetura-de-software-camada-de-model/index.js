const express = require('express');
const user = require('./controller');

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.post('/user', user.create);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});