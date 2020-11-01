const route = require('express').Router();
const userModel = require('../models/userModel');

route.get('/', (req, res) => {
    userModel.feachAll()
        .then((data) => res.json(data))
        .catch(error => console.log(error))

})


module.exports = route;