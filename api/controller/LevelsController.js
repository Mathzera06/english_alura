const database = require('../models')

class LevelsController {
    static async pegaTodasOsNiveis(req, res){
        try{
            const todosOsNiveis = await database.Levels.findAll();
            return res.status(200).json(todosOsNiveis);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaPorId(req, res){
        const { id } = req.params;
        try{
            const umLevel = await database.Levels.findOne({
                where: {id: Number(id)}
            })
            res.status(200).json(umLevel)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaLevel(req, res){
        const novoLevel = req.body
        try{
            const novoLevelCriado = await database.Levels.create(novoLevel)
            return res.status(200).json(novoLevelCriado)
        }catch(error){
            res.status(500).json(error.message)
        }
    }

    static async atualizaLevel(req, res){
        const { id } = req.params
        const atualizarLevel = req.body
        try{
            await database.Levels.update(atualizarLevel, {where: 
                {id: Number(id)}
            }
        )
        const levelAtualizado = await database.Levels.findOne({
            where: {id: Number(id)}
        })
            return res.status(200).json(levelAtualizado)
        }catch(error){
            res.status(500).json(error.message)
        }
    }

    static async apagaLevel(req, res){
        const { id } = req.params
        try{
            await database.Levels.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: "Level deleted!"})
        }catch(error){
            res.status(500).json(error.message)
        }
    }
}

module.exports = LevelsController;