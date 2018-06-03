const mongoose = require("mongoose");
const Medic = require("../models/medicaments");

exports.listMedic = function(req,res) {
    Medic.find()
    .then(function(docs) {
        console.log(docs);
        res.status(200).json({
            message:"Voici la liste des médicaments",
            medicaments:docs
        })
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).json({
            erreur: err
        })
    })
}
exports.addMedic = function(req,res) {
    const newMedic = new Medic({
        _id: new mongoose.Types.ObjectId(),
        nom: req.body.nom,
        prix: req.body.prix
    });
    newMedic.save()
    .then(function(result) {
        console.log(result)
        res.status(201).json({
            message:"Le médicament a été ajouté",
            newMedic: result
        });
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).json({
            erreur: err
        })
    })
}
exports.detailMedic = function(req,res) {
    const id = req.params.medicId;
    Medic.findById(id)
    .then(function(doc) {
        console.log(doc);
        res.status(200).json({
            message:"Les infos sur le médicament d'identifiant "+id,
            medicament: doc 
        }); 
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).json({
            erreur: err
        })
    })
}
exports.updateMedic = function(req,res) {
    const id = req.params.medicId;
    Medic.findByIdAndUpdate(id,{$set:req.body},{new:true})
    .then(function(doc) {
        console.log(doc);
        res.status(200).json({
            message:"Le médicament d'identifiant "+id+" a été modifié",
            updatedMedic:doc
        });
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).json({
            erreur: err
        })
    })
}
exports.deleteMedic = function(req,res) {
    const id = req.params.medicId;
    Medic.findByIdAndRemove(id)
    .then(function(doc) {
        console.log(doc);
        res.status(200).json({
            message:"Le médicament d'identifiant "+id+" a été supprimé",
            medicSuppr: doc
        });
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).json({
            erreur: err
        })
    })
}