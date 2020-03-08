const express = require('express')
const Router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../schema/userSchema')
const verifyUser = require('../middleware/verifyUser')
const bcrypt = require('bcrypt')

Router.get('/users', verifyUser, (req, res) => {
    User.find({}).then(user => {
        res.send(user.map(user => user.username))
    })
})

Router.post('/createuser', (req, res) => {

    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 12)
    }

    User.findOne({username: user.username}).then(result => {
        if(result){
            res.json("username taken")
        } else {
            User.create({username: user.username, password: user.password})
            .then(result => {
                res.send(result)
            })
        }
    })
})

Router.post('/login', (req, res) => {

    const credentials = {
        username: req.body.username,
        password: req.body.password
    }

    User.findOne({username: credentials.username}).then(function(result) {
        if(result){
            if(bcrypt.compareSync(credentials.password, result.password)){
                const token  = jwt.sign({
                    exp: Math.floor(Date.now() / 1000 + (60 * 60)),
                    user: {
                        _id: result.id,
                        username: result.username
                    }
                }, process.env.SECRET)
                res.set({
                    'Authorization': 'bearer ' + token
                })
                res.send(res.getHeader('Authorization'))
            } else {
                res.sendStatus(403).json('Invalid credentials')
            }
        }
    })  
})

module.exports = Router