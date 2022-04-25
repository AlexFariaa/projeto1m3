const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/personagens-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb Connect!'))
    .catch((error) =>
      console.log(`Erro ao conectar ao mongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase
