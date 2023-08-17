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
}

module.exports = PeopleController;