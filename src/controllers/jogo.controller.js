const jogosService = require('../services/jogo.service')

const findAllJogosController = (req, res) => {
    const jogos = jogosService.findAllJogosService();
    res.send(jogos)
}

const findByIdJogosController = (req, res) => {
    const parametroId = Number(req.params.id);
    const jogo = jogosService.findByIdJogosService(parametroId);
    res.send(jogo)
}

const createJogosController = (req, res) => {
    const jogo = req.body;
    const newJogo = jogosService.createJogoService(jogo)
    res.send(newJogo)
}

const updateJogosController = (req, res) => {
    const idParam = +req.params.id;
    const jogoEdit = req.body;
    const updatedJogo = jogosService.updateJogoService(idParam, jogoEdit);
    res.send(updatedJogo)
}

const deleteJogosController = (req, res) => {
    const idParam = req.params.id;
    jogosService.deleteJogoService(idParam);
    res.send({ message: 'Jogo deletado com sucesso!' })
}

module.exports = {
    findAllJogosController,
    findByIdJogosController,
    createJogosController,
    updateJogosController,
    deleteJogosController
}
