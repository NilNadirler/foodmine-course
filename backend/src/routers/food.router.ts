import { FoodModel } from './../models/food.model';
import { Router } from 'express';
import { sample_foods, sample_tags} from '../data';
import asyncHandler from 'express-async-handler'

const router = Router()


router.get("/seed", asyncHandler(
   async(req, res)=>{
       const foodsCount = await FoodModel.countDocuments();
       if(foodsCount> 0){
           res.send("Seed is already done");
           return;
       }

       await FoodModel.create(sample_foods);
       res.send("Seed Is Done");
   }
))




router.get("/", asyncHandler(
    async (req,res)=>{
        const foods = await FoodModel.find()
        res.send(foods)
    }
))



router.get("/search/:searchTerm", asyncHandler(
    async(req,res)=>{
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const foods = await FoodModel.find({name:{regex:searchRegex}})
        res.send(foods)
    }
))

router.get("/tags", (req,res)=>{
    res.send(sample_tags)
})

router.get("/tag/:tagName", (req,res)=>{
    const tagName = req.params.tagName;
    const tags = sample_tags.filter(tag => tag.name?.toLowerCase()
    .includes(tagName.toLowerCase()));
    res.send(tags)
})

router.get("/:foodId", (req, res)=>{
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id==foodId)
    res.send(food)
})

export default router;

