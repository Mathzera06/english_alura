const database = require('../models')

class ClassesController {
    static async pegaTodasAsClasses(req, res){
        try{
            const todasAsClasses = await database.Classes.findAll();
            return res.status(200).json(todasAsClasses);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaPorId(req, res){
        const { id } = req.params
        try{
            const umaClasse = await database.Classes.findOne({where: {id: Number(id)}})
            res.status(200).json(umaClasse)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaClasse(req, res){
        const novaClasse = req.body;
        try{
            const novaClasseCriada = await database.Classes.create(novaClasse)
            return res.status(200).json(novaClasseCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaClasse(req, res){
        const { id } = req.params;
        const atualizarClasse = req.body
        try{
            await database.Classes.update(atualizarClasse, {where: {id: Number(id)}})
            const classeAtualizada = await database.Classes.findOne({where: {id: Number(id)}})
            return res.status(200).json(classeAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaClasse(req, res){
        const { id } = req.params;
        try{
            await database.Classes.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: "Classe deleted!"})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClassesController;