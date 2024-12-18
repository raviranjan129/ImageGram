import express from "express";
import multer from 'multer';
import connectDB from "./config/dbConfig.js";


import ip from 'ip';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import apiRouter from './routers/apiRouter.js';
import { options } from './utils/swaggerOptions.js';
import {rateLimit} from "express-rate-limit";


const PORT = 3000;



const app = express(); // create express app server instance;

const limiter = rateLimit({
  windowMs:0.5 * 60 * 1000, //30 seconds
  max:5 // limit each Ip to 5 req per windowMs
});

app.use(limiter);

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

const swaggerDocs=swaggerJSDoc(options);

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))
app.get("/ping",  (req, res) => {
  // const name=req.params.name; //req.params->{name:'value'}
  console.log(req.query);
  console.log(req.body);
  console.log(req.user); 
  const ipaddr=ip.address();
  return res.json({ message: "pong" + ipaddr });
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

//client.->lb-> server1
// ...............->server2