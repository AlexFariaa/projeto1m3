const jogos = [
  {
    id: 1,
    nome: 'GTA V',
    preco: 250,
    foto: 'https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png',
    descricao: 'Jogo mundo aberto',
    tipo: 'mundo aberto',
  },
  {
    id: 2,
    nome: 'call of duty modern warfare',
    preco: 200,
    foto: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e9/CallofDutyModernWarfare%282019%29.jpg/270px-CallofDutyModernWarfare%282019%29.jpg',
    descricao: 'Guerra mundial',
    tipo: 'acao',
  },
  {
    id: 3,
    nome: 'call of duty ',
    preco: 200,
    foto: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e9/CallofDutyModernWarfare%282019%29.jpg/270px-CallofDutyModernWarfare%282019%29.jpg',
    descricao: 'Guerra mundial',
    tipo: 'acao',
  },
];

const findAllJogosService = () => {
  return jogos;
};

const findByIdJogosService = (parametroId) => {
  return (jogo = jogos.find((jogo) => jogo.id === parametroId));
};

const createJogoService = (newJogo) => {
  const newId = jogos.length + 1;
  newJogo.id = newId;
  jogos.push(newJogo);
  return newJogo;
};

const updateJogoService = (idParam, jogoEdit) => {
  jogoEdit['id'] = idParam;
  const jogoIndex = jogos.findIndex((jogo) => jogo.id == idParam);
  jogos[jogoIndex] = jogoEdit;
  return jogoEdit;
};

const deleteJogoService = (idParam) => {
  const jogoIndex = jogos.findIndex((jogo) => jogo.id == idParam);
  return jogos.splice(jogoIndex, 1);
};

module.exports = {
  findAllJogosService,
  findByIdJogosService,
  createJogoService,
  updateJogoService,
  deleteJogoService,
};
