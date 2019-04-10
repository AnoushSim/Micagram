const express = require('express');
const app = express();
const passwordHash = require('password-hash');
const mongoose = require('mongoose');
const RS = require('./components/request/service')
const bodyParser = require('body-parser');
const cors = require('cors');
const micagram = mongoose.createConnection('mongodb://127.0.0.1:27017/micagram');
const UsersSchema = require('./components/users/model')
const users = micagram.model('users', UsersSchema);

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(RS.parseQuery);


app.use((req, res, next) => {
    console.log('Request: ' + req.url + ' ' + new Date());
    next();
});

const UsersRouter = require('./components/users/api');
app.use('/users', UsersRouter);

app.listen(3003, () => console.log('Micagram listening on port 3003'));