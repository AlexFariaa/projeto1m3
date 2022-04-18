const peronsagensService = require('../services/personagem.service');

const findAllPersonagensController = (req, res) => {
  const personagens = peronsagensService.findAllPersonagensService();
  res.send(personagens);
};

const findByIdPersonagensController = (req, res) => {
  const parametroId = Number(req.params.id);
  const personagem = peronsagensService.findByIdPersonagensService(parametroId);
  res.send(personagem);
};

const createPersonagensController = (req, res) => {
  const personagem = req.body;
  const newPersonagem = peronsagensService.createPersonagemService(personagem);
  res.send(newPersonagem);
};

const updatePersonagensController = (req, res) => {
  const idParam = +req.params.id;
  const personagemEdit = req.body;
  const updatedPersonagem = peronsagensService.updatePersonagemService(idParam, personagemEdit);
  res.send(updatedPersonagem);
};

const deletePersonagensController = (req, res) => {
  const idParam = req.params.id;
  peronsagensService.deletePersonagemService(idParam);
  res.send({ message: 'Jogo deletado com sucesso!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagensController,
  createPersonagensController,
  updatePersonagensController,
  deletePersonagensController,
};
