const routes = require('express').Router();
const controllerPersonagens = require('../controllers/personagem.controller');
const {validId,validObjeticBody} = require('../middlewares/personagem.middleware')

routes.get('/personagens', controllerPersonagens.findAllPersonagensController);
routes.get('/personagens/:id', validId, controllerPersonagens.findByIdPersonagensController);
routes.post('/create', validObjeticBody, controllerPersonagens.createPersonagensController);
routes.put('/update/:id', validId, validObjeticBody, controllerPersonagens.updatePersonagensController);
routes.delete('/delete/:id', validId, controllerPersonagens.deletePersonagensController);

module.exports = routes;
