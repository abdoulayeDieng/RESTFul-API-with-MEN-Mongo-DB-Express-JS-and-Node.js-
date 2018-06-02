const express = require("express");
const medicRoutes = require("./api/routes/medicaments");
const userRoutes = require("./api/routes/users");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect("mongodb://pharmappUser:"+config.MONGO_PW+"@ds147900.mlab.com:47900/pharmapp");
app.use("/medicaments",medicRoutes);
app.use("/users",userRoutes);


app.listen(port,function(req,res) {
    console.log(" Server is running on port "+port);
})