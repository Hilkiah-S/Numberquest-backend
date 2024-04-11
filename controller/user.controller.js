
const userservice=require('../service/userservice')

async function createaccount(req, res) {

    try {

        const {username,profilepic}=req.body;
        const result = await userservice.creataccount(username,profilepic)
        if (!result)
            return res.json({ "success": false, "msg": "creating user failed" }, 400)


        return res.json({ "success": true, "data": { ...result._doc,createdpassword } })
    } catch (e) {
        if (e?.code == 11000)
            return res.json({ "success": false, "msg": "User already exist" }, 400)
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }
}


async function checkUsernameAvaliablity(req, res) {

    try {

        const {username}=req.body;
        const result = await userservice.checkUsernameAvaliablity(username)
        if (!result)
            return res.json({ "success": false, "msg": "creating user failed" }, 400)


        return res.json({ "success": true, "data": { ...result._doc,createdpassword } })
    } catch (e) {
        if (e?.code == 11000)
            return res.json({ "success": false, "msg": "User already exist" }, 400)
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }
}

module.exports={createaccount,checkUsernameAvaliablity}