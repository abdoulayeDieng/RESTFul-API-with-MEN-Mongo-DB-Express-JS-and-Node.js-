const express = require("express");
const userCtrl = require("../controllers/users")

const router = express.Router();

router.post("/signup",userCtrl.userSignup); 
router.post("/login",userCtrl.userLogin);

module.exports = router;

