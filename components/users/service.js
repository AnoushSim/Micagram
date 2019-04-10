const mongoose = require('mongoose');

class UsersService {
    constructor() {

        const micagram = mongoose.createConnection('mongodb://127.0.0.1:27017/micagram');

        const UsersSchema = require('./model');
        this.db = micagram.model('users', UsersSchema);

    }

    getUsers(name, options) {
        //return all users
        var age;
        options = options || {};
        if(typeof(options.offset) != 'number') {
            options.offset = 0;
        }
        if(typeof(options.limit) != 'number') {
            options.limit = 10;
        }

        let p =  new Promise((resolve, reject) => {
            let filter = new RegExp('^' + (name || ''), 'gi');
            this.db.find({username: filter})
                .skip(options.offset)
                .limit(options.limit)
                .exec()
                .then( users => {
                    resolve(users);
                }).catch(err => {
                reject(err);
            });
        });
        return p;
    }
}

module.exports = new UsersService();