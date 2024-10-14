import express from "express";
import connectDB from "./config/dbConfig.js";

const PORT = 3000;

const app = express();  // create express app server instance;

// app.get('/',(req,res)=>{
// return res.send('Home');
// })

app.get('/ping',(req,res)=>{
return res.json({message:'pong'});
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



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})