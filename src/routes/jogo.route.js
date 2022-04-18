const routes = require('express').Router();
const controllerJogos = require('../controllers/jogo.controller');

routes.get('/categorias', controllerJogos.findAllJogosController);
routes.get('/categorias/:id', controllerJogos.findByIdJogosController);
routes.post('/create', controllerJogos.createJogosController);
routes.put('/update/:id', controllerJogos.updateJogosController);
routes.delete('/delete/:id', controllerJogos.deleteJogosController);

module.exports = routes;
