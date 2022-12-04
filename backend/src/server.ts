
import express from "express"
import cors from "cors";
import foodRouter from './routers/food.router'
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router"
import dotenv from 'dotenv';
dotenv.config();
process.env.MONGO_URI

import { dbConnect } from "./config/database.congif";
dbConnect();

const app = express()
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


const port=5000;
app.listen(port, ()=>{
    console.log("Webside served on http://localhost:" +port)
})
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter)





