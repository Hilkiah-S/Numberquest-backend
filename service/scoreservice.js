const scoreModel = require("../models/scoresmodels")

require('dotenv').config();
async function scoreentry(userid,operation,score ) {
    // console.log("sec storage",process.env.SEC_STORE);
// profilepic=process.env.SEC_STORE+profilepic+'.png';
   if(operation == true){
    const user = await scoreModel.findOne({username:userid});
    if(user){
        user.score=user.score+score;
        await user.save();
        return user;
    }else{
        const scoreboard= scoreModel.create({username:userid,score});
        if(!scoreboard){
            return false;
        }else{
            return scoreboard;
        }
    }
   }else{


   }

    const user = await scoreModel.create({ username,profilepicture:profilepic})
    if(!user){
        return false
    }
    return user;
}

module.exports={scoreentry}