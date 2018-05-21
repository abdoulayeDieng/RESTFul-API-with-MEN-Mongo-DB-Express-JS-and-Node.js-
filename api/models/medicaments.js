const mongoose = require("mongoose");

const medicSchema = mongoose.Schema({
    nom: String,
    prix: Number
});

module.exports = mongoose.model("Medic", medicSchema)
