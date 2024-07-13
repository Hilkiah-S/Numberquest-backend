const express= require('express')
const app = express()
const userRouter = require('./routes/user')
const ScoreRouter = require('./routes/score')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const cors =require("cors")
require('dotenv').config();
const axios = require('axios');
const socketIo = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketIo(server);
const { v4: uuidv4 } = require('uuid');  
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log("Connectd to MongoDB")
        app.listen(process.env.PORT,()=>{
            console.log('Node running on port'+process.env.PORT);
            
        } );
        // process.env.IOPORT
    server.listen(3001, () => {
        console.log('Node and Socket.IO running on port ' + 3001);
    });
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

io.on('connection', (socket) => {
    console.log('A user connected');
    
  

    socket.on('createRoom', () => {
        const roomId = uuidv4(); 
        socket.join(roomId);
        socket.emit('roomID', roomId); 
        console.log(`Room created with ID: ${roomId}`);
    });

    socket.on('join', (roomId) => {
        socket.join(roomId);
        console.log(`User joined room ${roomId}`);
    });

    socket.on('message', (data) => {
        io.to(data.room).emit('message', data.msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
// app.use('/score',ScoreRouter)

app.use((err,req,res,next)=>{
if(err.name!='UnauthorizedError'){
    return next(err);
}
res.status(401).json({"success":false,"msg":"Unauthenticated"});
});

