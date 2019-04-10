const express = require('express');
const UsersRouter = express.Router();

const UsersService = require('./service');

UsersRouter.get('/', (req,res) => {
    //get all users
    let p = UsersService.getUsers(req.query.name, {
        offset: req.offset,   //vorerordic sksats ta
        limit: req.limit  //esinch tvic sksats qani hat  PAGINATION
    });
    p.then(users => {
        return res.send(users)
    }).catch(err => {
        return res.send('error');
    });
});

UsersRouter.post('/', (req,res) => {
    //create new user

});

module.exports = UsersRouter;