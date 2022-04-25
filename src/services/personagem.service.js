const Personagens = require('../models/Personagem');

const findAllPersonagensService = async () => {
  const allPersonagens = await Personagens.find();
  return allPersonagens;
};

const findByIdPersonagensService = async (idParam) => {
  const onePersonagem = await Personagens.findById(idParam);
  return onePersonagem;
};

const createPersonagemService = async (newPersonagem) => {
  const createdPersonagem = await Personagens.create(newPersonagem)
  return createdPersonagem;
};

const updatePersonagemService = async (idParam, EditPersonagem) => {
  const updatePersonagem = await Personagens.findByIdAndUpdate(idParam, EditPersonagem)
  return updatePersonagem;
};

const deletePersonagemService = async (idParam) => {
  return await Personagens.findByIdAndDelete(idParam)
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagensService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
