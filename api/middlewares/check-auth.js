const jwt = require("jsonwebtoken");
const config = require("../../config");

module.exports = function(req, res, next) {
    const token = req.header("authorization").split(" ")[1];
    jwt.verify(token,config.SECRET_KEY,function(err,decoded) {
        if(err){
            res.status(401).json({
                message : "non autorisé",
                err:err
            });
        }else{
            req.decoded = decoded;
            next();
        }
    })
}