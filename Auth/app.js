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
    res.render("createuser")
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
});

app.get("/login", (req, res)=>{
    res.render("login");
})

app.post("/login", async(req , res)=>{
    let {email, password}= req.body;

    let user = await userModel.findOne({email});

    if(!user) res.send("No user found!!!");
    else{
        bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if(result) res.send(user);
            else res.send("Password is Incorrect!!!")
        });
    }
})


app.listen(3000);