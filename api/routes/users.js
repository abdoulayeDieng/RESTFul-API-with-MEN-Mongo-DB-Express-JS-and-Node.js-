const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/signup",function(req,res) {
    bcrypt.hash(req.body.password,10,function(err, hash) {
        if(err){
            console.log(err);
            res.status(500).json({
                message:err
            });
        }else{
            newUser = new User({
                email: req.body.email,
                password: hash
            });
            newUser.save()
            .then(function(doc) {
                console.log(doc);
                res.status(201).json({
                    message:"User a été créé",
                    newUser: doc
                });
            })
            .catch(function(err) {
                console.log(err);
                res.status(500);json({
                    message: err
                })
            })
        }
    });
})

module.exports = router;

