const express = require("express");
const router = express.Router();

router.get("/",function(req,res) {
    res.status(200).json({
        message:"Voici la liste des médicaments"
    })
}); 

router.post("/",function(req,res) {
    res.status(201).json({
        message:"Le médicament a été ajouté"
    });
});

router.get("/:medicId",function(req,res) {
    const id = req.params.medicId;
    res.status(200).json({
        message:"Les infos sur le médicament d'identifiant "+id
    });
});

router.put("/:medicId",function(req,res) {
    const id = req.params.medicId;
    res.status(200).json({
        message:"Le médicament d'identifiant "+id+" a été modifié"
    });
});

router.delete("/:medicId",function(req,res) {
    const id = req.params.medicId;
    res.status(200).json({
        message:"Le médicament d'identifiant "+id+" a été supprimé"
    });
});

module.exports = router;
