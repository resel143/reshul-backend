// Getting started - 3 items
// Cookies
// Password encryption and decryption 
// JWT
const cookieParser = require("cookie-parser");
const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser())


app.get("/", (req, res)=> {
    let token = jwt.sign({email: "reshul@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("JWT")
});


app.get("/read", (req, res)=>{
    const data = jwt.verify(req.cookies.token, "secret");
    res.send(data)
})

app.listen(3000);