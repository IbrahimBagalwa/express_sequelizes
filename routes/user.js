const route = require('express').Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const confing = require('config');

route.get('/', (req, res) => {
    userModel.findAll()
        .then((data) => res.json(data))
        .catch(error => console.log(error))

})

// la validation de field et de l'existance

route.post('/', (req, res) => {
    // distractiring
    let { nom, postNom, email, password } = req.body;
    if (!nom || !postNom || !email || !password) res.status(400).json({ msg: 'remplissez tout les champs' });


    // chek if user exists
    userModel.findOne({ where: { email } })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'l\'utlisateur existe deja' });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err
                    password = hash;
                    userModel.create({ nom, postNom, email, password })
                        .then(user => {
                            jwt.sign({ id: user.id },
                                config.get('secret_key'), { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err,
                                        res.json({
                                            token,
                                            user: {
                                                name: user.name
                                            }
                                        })
                                })
                        })
                })
            })
        }).catch(err => console.log(err))
})


module.exports = route;