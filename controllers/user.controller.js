const BaseController=require('./base.controller');
const User =require('../models/user');

class UserController extends BaseController{

    async create(req,res){

        //insertinto db
        let user =new User();
        let firstName='';
        let lastName='';
        let email='';
        let age='';
        let hobbies='';
        let result =await user.create(firstName,lastName,email,age,hobbies);

       res.status(201).send('result');
    }

}

module.exports=new UserController;