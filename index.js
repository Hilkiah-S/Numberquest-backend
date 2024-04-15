const express= require('express')
const app = express()
const userRouter = require('./routes/user')
const ScoreRouter = require('./routes/score')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const cors =require("cors")
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log("Connectd to MongoDB")
        app.listen(process.env.PORT,()=>{
            console.log('Node running on port'+process.env.PORT);
        } )
    }
).catch(
    (error)=>{
        console.log(error)
    }
)
app.use(cors());
app.use(bodyparser.json())
app.use((req,res,next)=>{
    console.log(req.body);
    next();
})
app.use('/user',userRouter)

// app.use('/score',ScoreRouter)

app.use((err,req,res,next)=>{
if(err.name!='UnauthorizedError'){
    return next(err);
}
res.status(401).json({"success":false,"msg":"Unauthenticated"});
});

