const usuarioRepository = require("../models/cliente")

exports.listar = async(req,res) => {
    try {
        const retorno = await usuarioRepository.findAll();
        res.status(200).send(retorno);        
    } catch (error) {
        res.status(500).send("Deu errado", error)
    }

}
exports.criar = async(req,res) => {
    const {nome} = req.body;
    try {
        const criar = await usuarioRepository.create({
            nome:nome
        });
        res.status(200).send("sucesso");  
    } catch (error) {
        res.status(500).send("Deu errado", error)
    }
}