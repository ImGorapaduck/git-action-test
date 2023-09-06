const express = require("express");
const serverless = require('serverless-http');



const app = express();


app.use(express.json());


app.get('/', (req, res) => {

    res.send("Git Action Test Sccuess \n 1. IAM 키 생성  \n 2. IAM AWSLambda_FullAccess 정책 연결")

})



module.exports.handler = serverless(app);