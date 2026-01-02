const cookieParser = require("cookie-parser");
const express = require("express");
const userModel = require("./models/user")


const app = express();
const bcrypt = require("bcrypt");

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
            if(newUser) res.status(200).send("User Created Successfully!!!")

        })
    })

})


app.listen(3000)