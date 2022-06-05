const dotenv= require("dotenv")
const express= require ("express")
const mongoose= require("mongoose")
const app=express();

dotenv.config({path:'./config.env'})

app.use(express.json());

const User=require("./model/userSchema")
require('./db/conn')


const PORT=process.env.PORT;

app.use(require('./router/auth'))
app.use(require('./router/signin'))

//Middleware

const middleware=(req,res,next)=>{
    console.log("Middleware is running");
    next();
}

app.listen(3000, ()=>{
    console.log(`Server is running at port ${PORT}`)
})