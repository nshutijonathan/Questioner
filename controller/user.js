const user = require('../models/user');

class User {
        
    static getUser(req, res){
        const id  = parseInt(req.params.userId, 10);
        const userFound = user.getUser(id);
        if(userFound === undefined){
            return res.status(404).send({
                status: 404,
                error: 'User not exist'
            });
        }
        return res.status(200).send(userFound);
    }
}

module.exports = User;
