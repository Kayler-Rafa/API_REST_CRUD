const User = require("../model/user")

class UserController{
    async create(req, res){
            try{
                const dados = await User.create(req.body);
                return res.status(200).json(dados);
            }catch(error){
                console.log("Verifique os campos de cadastros");
                return res.status(400);
            }
    }

    async readAll(req, res){
        try{
            const dados = await User.find({})
            return res.status(200).json(dados);
        }catch(error){
            console.log("Dados não encontrados");
            return res.status(404 );
        }
    }   

    async deleteUser(req, res){
        try{
            const dados = await User.FindOneAndDelete(req.params.email);
            return res.status(200).json(dados);
        }catch(error){
            console.log("Erro!");                                                                                        
            return res.status(404).send(dados);
        }
    }
}

module.exports = new UserController();