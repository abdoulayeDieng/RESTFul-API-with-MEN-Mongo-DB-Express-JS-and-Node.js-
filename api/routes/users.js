const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");

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
});
router.post("/login", function(req,res) {
    User.findOne({email:req.body.email})
    .then(function(doc) {
        if(!doc){
            res.status(401).json({
                message : "Non autorisé"
            });
        }else{
            bcrypt.compare(req.body.password,doc.password,function (err, same) {
                if(!same){
                    res.status(401).json({
                        message : "Non autorisé"
                    });
                }else{
                    jwt.sign({email:req.body.email},config.SECRET_KEY,{expiresIn:"1h"},function(err,token){
                        res.status(200).header({token:token}).json({ message : "autorisé"});
                    });   
                }  
            })
            console.log(doc);
        }
    })
})

module.exports = router;

