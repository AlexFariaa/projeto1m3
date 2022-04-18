const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const res = require('express/lib/response');
const routes = require('./src/routes/jogo.route');

app.use(express.json());
app.use(cors());
app.use('/jogos', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
