// Getting started

const cookieParser = require("cookie-parser");
const express = require("express");


const app = express();

app.use(cookieParser())


app.get("/", (req, res)=> {
    res.cookie("name", "Reshul");
    res.send("Success")
});


app.get("/read", (req, res)=>{
    console.log(req.cookies)
    res.send("Read Page!!");
});


app.listen(3000);