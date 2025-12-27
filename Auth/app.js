const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const userModel = require("./models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();

const secret = "reshul";

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
    // user enter email and password
    let {email, password}= req.body;

    // we search in db based on email
    let user = await userModel.findOne({email});

    // user does not exist in db
    if(!user) res.send("No user found!!!");
    // if user exists
    else{
        // compare the password using hash values
        bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if(result) {
                // create a JWT token
                let token = jwt.sign({email}, secret);
                // store the token as cookie in browser
                res.cookie(token);
                res.send(user);
            }
            else res.send("Password is Incorrect!!!")
        });
    }
})


app.listen(3000);