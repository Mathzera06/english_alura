const database = require('../models');

class PeopleController {
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.People.findAll();
            return res.status(200).json(todasAsPessoas);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaPorId(req, res){
        const { id } = req.params;
        try{
            const umaPessoa = await database.People.findOne( { 
                where: {id:Number(id)
                }
            });
            return res.status(200).json(umaPessoa);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.People.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res){
        const { id } = req.params
        const atualizarPessoa = req.body

        try{
            await database.People.update(atualizarPessoa, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.People.findOne( { 
                where: {id:Number(id)
            }})
            return res.status(200).json(pessoaAtualizada)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res){
        const { id } = req.params
        try{
            await database.People.destroy({where: { id: Number(id)}})
            return res.status(200).json({message: "People deleted!"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController;