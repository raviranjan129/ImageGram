import mongoose from "mongoose";

const postSchema= new mongoose.Schema({
    caption:{
        type:String,
        required:true,
        minLength:5

    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,     // which user post image;
        ref:"User"
    }
},{timestamps:true})

const post =mongoose.model("Post",postSchema); // post collection

export default post;