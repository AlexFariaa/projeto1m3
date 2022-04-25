const peronsagensService = require('../services/personagem.service');
const mongoose = require('mongoose');

const findAllPersonagensController = async (req, res) => {
  const allPersonagens = await peronsagensService.findAllPersonagensService();

  if (allPersonagens.length == 0) {
    res.status(404).send({ message: 'Personagens não encontrado' });
  }

  res.send(allPersonagens);
};

const findByIdPersonagensController = async (req, res) => {
  const idParam = req.params.id;

  const onePersonagem = await peronsagensService.findByIdPersonagensService(
    idParam,
  );

  if (!onePersonagem) {
    return res.status(404).send({ message: 'Id não encontrado' });
  }

  res.send(onePersonagem);
};

const createPersonagensController = async (req, res) => {
  const personagem = req.body;
  const newPersonagem = await peronsagensService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const updatePersonagensController = async (req, res) => {
  const idParam = req.params.id;
  const editPersonagem = req.body;

  const updatedPersonagem = await peronsagensService.updatePersonagemService(
    idParam,
    editPersonagem,
  );

  res.send(updatedPersonagem);
};

const deletePersonagensController = async (req, res) => {
  const idParam = req.params.id;

  await peronsagensService.deletePersonagemService(idParam);

  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagensController,
  createPersonagensController,
  updatePersonagensController,
  deletePersonagensController,
};
