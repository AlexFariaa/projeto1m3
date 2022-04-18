const routes = require('express').Router();
const controllerPersonagens = require('../controllers/personagem.controller');

routes.get('/personagens', controllerPersonagens.findAllPersonagensController);
routes.get('/personagens/:id', controllerPersonagens.findByIdPersonagensController);
routes.post('/create', controllerPersonagens.createPersonagensController);
routes.put('/update/:id', controllerPersonagens.updatePersonagensController);
routes.delete('/delete/:id', controllerPersonagens.deletePersonagensController);

module.exports = routes;
