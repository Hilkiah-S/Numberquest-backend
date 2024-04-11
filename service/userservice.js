const userModel = require("../models/usermodel.ts")


async function createaccount(username, profilepic) {


    const user = await userModel.create({ username,profilepicture:profilepic})
    if(!user){
        return false
    }
    return user;
}


module.exports={createaccount};