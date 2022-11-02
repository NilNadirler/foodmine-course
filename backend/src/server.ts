import { sample_foods, sample_tags } from './../../frontend/src/data';
import express from "express"
import cors from "cors";

const app = express()
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