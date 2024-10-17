import mongoose from 'mongoose';
import { DB_URL } from "./serverConfig.js";

export default async function connectDB() {
    try{
        await mongoose.connect(DB_URL);
        console.log("connected to mongoDb");
    }catch(error){
        console.log("something went wrong");
        console.log(error);
    }
}

