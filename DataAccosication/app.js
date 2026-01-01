const express = require("express");
const userModel = require ("./models/user");
const postModel =  require("./models/post");

const app = express();

app.get("/", (req, res)=>{
    res.send("hey")
})

app.get("/create", async (req ,res)=>{
    const user = await userModel.create({
        username: "Reshul",
        age: 35,
        email: "reshul@gmail.com"
    })

    res.send(user)

});


app.get('/post/create', async(req ,res)=>{
    let post = await postModel.create({
        postdata: "This is my first post",
        user: "69566b9836b67fde62f002c4"
    });

    let user = await userModel.findOne({_id: "69566b9836b67fde62f002c4"});

    if(user){
        user.posts.push(post._id);
        res.send({post, user})
    }
    

})


app.listen(3000);
