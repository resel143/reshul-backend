const cookieParser = require("cookie-parser");
const express = require("express");
const userModel = require("./models/user")

const app = express();

app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req , res) => {
    res.render("index");
})



app.listen(3000)