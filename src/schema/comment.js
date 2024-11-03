import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        minLenght:1
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    onModel:{
        type:String,
        required:true,
        enum:["Post","Comment"],
    },
    commentableId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:"onModel",
    },
    replies:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }
    ]

})

const Comment = mongoose.model("Comment",commentSchema);

export default Comment;


//write an API to create comments on a post or another comment