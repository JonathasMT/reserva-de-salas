const app = require('./app');
require('dotenv').config();

const porta = process.env.PORTA;

app.listen(porta, () => {
    console.log('Servidor iniciado na porta ' + porta);
});