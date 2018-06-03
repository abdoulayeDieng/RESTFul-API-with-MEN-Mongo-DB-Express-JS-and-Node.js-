const mongoose = require("mongoose");
const medicsModel = require("../models/medicaments");

exports.listMedic = medicsModel.listMedic;
exports.addMedic = medicsModel.addMedic;
exports.detailMedic = medicsModel.detailMedic;
exports.updateMedic = medicsModel.updateMedic;
exports.deleteMedic = medicsModel.deleteMedic;