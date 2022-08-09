const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
app.listen(port);

app.get('/', (req,res) => {
    return res.send({message: "Servidor rodando na porta 3000"})
})

