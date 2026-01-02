const cookieParser = require("cookie-parser");
const express = require("express");
const userModel = require("./models/user")
const postModel  = require("./models/post")

const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req , res) => {
    res.render("index");
})

app.post("/register", async(req, res)=>{
    const {name, username, password, email, age} = req.body;
    
    let user = await userModel.findOne({email});
 
    if(user) return res.status(500).send("User already Registered!!");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async(err, hash)=>{

            let newUser = await userModel.create({
                email,
                name,
                username,
                age,
                password: hash
            })
            
            let token = jwt.sign({email, userId: newUser._id}, "secret");
            res.cookie("token", token);
            res.send("Registration Successfull")
        })
    })
})

app.get("/login", (req , res)=> {
    res.render("login")
})


app.get("/post", (req, res)=>{
    res.render("userpost")
})

app.post("/login", async (req, res)=> {
    const {email, password} = req.body;

    let user = await userModel.findOne({email});

    if(!user) return res.status(500).send("Something went wrong!!")

    bcrypt.compare(password, user.password, (err, result)=>{
       if(result) res.redirect("/post")
        else res.status(500).send("Oops!!! Something went wrong")
    })

})


app.listen(3000)