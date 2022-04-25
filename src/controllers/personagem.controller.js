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
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido' });
  }

  const onePersonagem = await peronsagensService.findByIdPersonagensService(
    parametroId,
  );

  if (!onePersonagem) {
    return res.status(404).send({ message: 'Id não encontrado' });
  }

  res.send(onePersonagem);
};

const createPersonagensController = async (req, res) => {
  const personagem = req.body;

  if (
    !personagem ||
    !personagem.nome ||
    !personagem.foto ||
    !personagem.descricao ||
    !personagem.origem
  ) {
    return res
      .status(400)
      .send({ message: 'envie todos os campos do personagem!' });
  }

  const newPersonagem = await peronsagensService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const updatePersonagensController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(404).send({ message: 'ID não encontrado' });
  }
  const editPersonagem = req.body;

  if (
    !editPersonagem ||
    !editPersonagem.nome ||
    !editPersonagem.foto ||
    !editPersonagem.descricao ||
    !editPersonagem.origem
  ) {
    res.status(400).send({ message: 'Envie todos os campos para alterar' });
  }

  const updatedPersonagem = await peronsagensService.updatePersonagemService(
    idParam,
    editPersonagem,
  );

  res.send(updatedPersonagem);
};

const deletePersonagensController = async (req, res) => {
  const idParam = req.params.id;
  
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(404).send({ message: 'ID não encontrado' });
  }

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
