const personagens = [
  {
    id: 1,
    nome: 'Thommy Shelby',
    foto: '',
    descricao: 'Lider da gangue',
    serie: 'Peaky Blinders',
  },
  {
    id: 2,
    nome: 'Polly Gray',
    foto: '',
    descricao: 'Tia',
    serie: 'Peaky Blinders',
  },
  {
    id: 3,
    nome: 'Arthur Shelby',
    foto: '',
    descricao: 'Irmao mais velho',
    serie: 'Peaky Blinders',
  },
];

const findAllPersonagensService = () => {
  return personagens;
};

const findByIdPersonagensService = (parametroId) => {
  return (personagem = personagens.find((personagem) => personagem.id === parametroId));
};

const createPersonagemService = (newPersonagem) => {
  const newId = personagens.length + 1;
  newPersonagem.id = newId;
  personagens.push(newPersonagem);
  return newPersonagem;
};

const updatePersonagemService = (idParam, personagemEdit) => {
  personagemEdit['id'] = idParam;
  const personagemIndex = personagens.findIndex((personagem) => personagem.id == idParam);
  personagens[personagemIndex] = personagemEdit;
  return personagemEdit;
};

const deletePersonagemService = (idParam) => {
  const personagemIndex = personagens.findIndex((personagem) => personagem.id == idParam);
  return personagens.splice(personagemIndex, 1);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagensService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
