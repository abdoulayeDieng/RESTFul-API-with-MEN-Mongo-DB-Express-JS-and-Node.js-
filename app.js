const express = require("express");
const medicRoutes = require("./api/routes/medicaments");

const app = express();

const port = process.env.PORT || 3000;

app.use("/medicaments",medicRoutes);

app.listen(port,function(req,res) {
    console.log("Server is running on port "+port);
})