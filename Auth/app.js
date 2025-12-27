const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const userModel = require("./models/user");

const bcrypt = require("bcrypt");
const app = express();

app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get("/", (req, res)=>{
    res.render("index")
})

app.post("/create", (req, res)=>{
    let {username, password, email, age} = req.body;
    let createUser;

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, async(err, hash)=>{

            createUser = await userModel({
                username,
                password:hash,
                email,
                age
            });

            await createUser.save();
            res.send(createUser)
        })
    })
})


app.listen(3000);