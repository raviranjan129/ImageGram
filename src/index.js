import express from "express";
import connectDB from "./config/dbConfig.js";
import multer from 'multer';
// import { createPost } from "./controllers/postController.js";
// import { S3uploader } from "./config/multerConfig.js";
// import postRouter from './routers/post.js';
// import userRouter from './routers/user.js'

import apiRouter from './routers/apiRouter.js';
import { isAuthenticated } from "./middleware/authMiddleware.js";

const PORT = 6000;

const app = express(); // create express app server instance;

const upload= multer();

app.use(express.json()); // middleware to parse json data; and app.use add middleware to every single request;
app.use(express.text()); //serlization and decerelization;
app.use(express.urlencoded()); //%25c etc;


// app.get('/',(req,res)=>{
// return res.send('Home');
// })

// app.use('/posts',postRouter); //if the url has /posts , then use the postRouter to handle the request;

// app.use('/users',userRouter)

app.use('/api',apiRouter);  // if the url starts with  /api then the request is  forwarded to the apiRouter;

app.get("/ping", isAuthenticated, (req, res) => {
  // const name=req.params.name; //req.params->{name:'value'}
  console.log(req.query);
  console.log(req.body);
  console.log(req.user);
  return res.json({ message: "pong" });
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

// app.post("/posts", S3uploader.single("image"), createPost); //routing layer; // collect the file upload to S3;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});
