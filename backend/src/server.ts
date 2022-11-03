import { sample_users } from './data';
import { sample_foods, sample_tags } from './../../frontend/src/data';
import express from "express"
import cors from "cors";
import jwt from "jsonwebtoken"

const app = express()
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods", (req,res)=>{
    res.send(sample_foods)
})

const port=5000;

app.listen(port, ()=>{
    console.log("Webside served on http://localhost:" +port)
})

app.get("/api/foods/search/:searchTerm", (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food=> food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(foods)

})

app.get("/api/foods/tags", (req,res)=>{
    res.send(sample_tags)
})

app.get("/api/foods/tag/:tagName", (req,res)=>{
    const tagName = req.params.tagName;
    const tags = sample_tags.filter(tag => tag.name?.toLowerCase()
    .includes(tagName.toLowerCase()));
    res.send(tags)
})

app.get("/api/foods/:foodId", (req, res)=>{
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id==foodId)
    res.send(food)
})

app.post("/api/users/login", (req,res)=>{
    const{email,password}= req.body
    const user = sample_users.find(user => user.email === email && user.password === password)
    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("Username or password is not valid")
    }
})

const generateTokenResponse =(user:any)=>{ 
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "SomeRandomText",{
        expiresIn:"30d"
    })

    user.token = token;
    return user;
}

