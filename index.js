const express = require("express");
const serverless = require('serverless-http');



const app = express();


app.use(express.json());


app.get('/', (req, res) => {

    res.send("Git Action Test Sccuess    xptmm")

})



module.exports.handler = serverless(app);