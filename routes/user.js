const router = require("express-promise-router")(); 
const userController = require("../controller/user.controller");
/** 
 * Register user  
 *  
 * @route POST /auth/login/ 
 * @group Auth   
 * @param {string} username - username of the user 
 * @param {string} profilepic - profile of the user 
 * @returns {object} 200 - User object 
 * @returns {Error}  default - Unexpected error 
 */ 
router.post('/create', userController.createaccount); 

/** 
 * Register user  
 *  
 * @route POST /auth/login/ 
 * @group Auth   
 * @param {string} username - username of the user 
 * @param {string} profilepic - profile of the user 
 * @returns {object} 200 - User object 
 * @returns {Error}  default - Unexpected error 
 */ 
router.post('/checkavaliablity', userController.checkUsernameAvaliablity); 


module.exports=router;