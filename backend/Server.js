const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req,res) => {
    res.send("hello world!");
});

app.use((req,res,next)=> {
    console.log("path "+ req.path+ "method" +req.method);
    next();
});

app.listen(process.env.PORT,() =>{
    console.log("Listening to" + process.env.PORT);
});

