const userModel = require("../models/usermodel.ts")

require('dotenv').config();
async function createaccount(username, profilepic) {
    console.log("sec storage",process.env.SEC_STORE);
profilepic=process.env.SEC_STORE+profilepic+'.png';

    const user = await userModel.create({ username,profilepicture:profilepic})
    if(!user){
        return false
    }
    return user;
}

async function checkUsernameAvaliablity(username) {

    // await userModel.collection.getIndexes().then(indexes => {
    //     console.log(indexes);
    // }).catch(err => {
    //     console.error('Error fetching indexes:', err);
    // });
    // await userModel.collection.dropIndex('profilepicture_1').then(() => {
    //     console.log('Unique index on profilepicture dropped.');
    // }).catch(err => {
    //     console.error('Error dropping index:', err);
    // });
    
    // await userModel.collection.createIndex({ profilepicture: 1 }).then(() => {
    //     console.log('Index on profilepicture recreated without uniqueness.');
    // }).catch(err => {
    //     console.error('Error creating index:', err);
    // });
    
    
    const user = await userModel.findOne({ username})
    if(!user){
        return true;
    }
    return false;
}

module.exports={createaccount,checkUsernameAvaliablity};