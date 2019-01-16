const users = require('../data/user');

class User {
    constuctor() {
    }

    getUser(id){
        return users.find(user => user.id ===  id);
    }
}

module.exports = new User();