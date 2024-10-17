import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";

const PORT = 4000;

const app = express();  // create express app server instance;

// app.use(express.json()); // middleware to parse json data; and app.use add middleware to every single request;
// app.use(express.text()); //serlization and decerelization;
// app.use(express.urlencoded());  //%25c etc; 


// app.get('/',(req,res)=>{
// return res.send('Home');
// })

app.get('/ping',(req,res)=>{
    // const name=req.params.name;
    console.log(req.query);
    console.log(req.body);
return res.json({message:'pong' });
});

// app.get('/hello',(req,res)=>{
// return res.json({message:'Hello world'})
// })

// app.post('/hello',(req,res)=>{
//     return res.json({message:'POST:Hello world'})
//     })
    
//     app.put('/hello',(req,res)=>{
//         return res.json({message:'put:Hello world'})
//         })


// app.post ('/posts',createPost)   //routing layer;

// function m1(req,res,next){  //middleware-> validation can be easily updated to the middleware;
//     console.log('m1');
//     next();
// }

// function m2(req,res,next){
//     console.log('m2');
//     next();
// }

// function m3(req,res,next){
//     console.log('m3');
//     next();
// }

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})