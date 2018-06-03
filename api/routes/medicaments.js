const express = require("express");
const router = express.Router();
const medicCtrl = require("../controllers/medicaments");
const checkAuth = require("../middlewares/check-auth");

router.get("/",medicCtrl.listMedic); 

router.post("/", checkAuth,medicCtrl.addMedic);

router.get("/:medicId",medicCtrl.detailMedic);

router.put("/:medicId",checkAuth,medicCtrl.updateMedic);

router.delete("/:medicId",checkAuth,medicCtrl.deleteMedic);

module.exports = router;
