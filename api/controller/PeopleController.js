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

    static async pegaUmaMatricula(req, res){
        const { studentId, registrationId } = req.params
        try{
            const umaMatricula = await database.Registration.findOne({
                where: {
                    id: Number(registrationId),
                    student_id: Number(studentId)
                }
            })
            return res.status(200).json(umaMatricula)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res){
        const { studentId } = req.params
        const novaMatricula = { ...req.body, student_id: Number(studentId) }
        try{
            const novaMatriculaCriada = await database.Registration.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res){
        const { studentId, registrationId } = req.params
        const atualizarMatricula = req.body

        try{
            await database.Registration.update(atualizarMatricula, {
                where: {
                    id: Number(registrationId),
                    student_id: Number(studentId)
                }
            })
            const matriculaAtualizada = await database.Registration.findOne( { 
                where: {id: Number(registrationId)
            }})
            return res.status(200).json(matriculaAtualizada)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res){
        const { studentId, registrationId } = req.params
        try{
            await database.Registration.destroy(
                {
                    where: 
                    {id: Number(registrationId)}
                }
            )
            return res.status(200).json({message: "Registration deleted!"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController;