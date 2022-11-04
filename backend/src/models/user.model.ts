import { model, Schema } from "mongoose";

export interface User{
    id:string;
    email:string;
    name:string;
    password: string;
    address:string;
    isAdmin:boolean
}