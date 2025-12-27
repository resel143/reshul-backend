// Getting started - 3 items
// Cookies
// Password encryption and decryption 
// JWT
const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(cookieParser())


app.get("/", (req, res)=> {
    // making hash for password
    bcrypt.genSalt(10, function (err, salt){
        bcrypt.hash('password', salt, function (err, hash){
            console.log(hash)
        })
    })

    // check password match
    bcrypt.compare('password', "$2b$10$3U6TJvO7dkuMZTUWpJA33OEt56mM8oGr3X5rYoHhJdahYWLOukWYq", function(err, res){
        console.log(res)
    })
});


app.get("/read", (req, res)=>{
    console.log(req.cookies)
    res.send("Read Page!!");
});


app.listen(3000);