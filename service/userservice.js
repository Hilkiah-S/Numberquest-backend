const userModel = require("../models/usermodel.ts")


async function createaccount(username, profilepic) {


    const user = await userModel.create({ username,profilepicture:profilepic})
    if(!user){
        return false
    }
    return user;
}

async function checkUsernameAvaliablity(username) {


    const user = await userModel.findOne({ username})
    if(!user){
        return true;
    }
    return false;
}

module.exports={createaccount,checkUsernameAvaliablity};