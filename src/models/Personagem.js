const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  serie: {
    type: Number,
    require: true,
  },
  origem: {
    type: String,
    require: true,
  }
});

const Personagem = mongoose.model('personagens', PersonagemSchema)

module.exports = Personagem
