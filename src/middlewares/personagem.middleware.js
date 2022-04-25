const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  next();
};

const validObjeticBody = (req, res, next) => {
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
    next();
};

module.exports = {
    validId,
    validObjeticBody
}
