const userSchema=require('../schema/user');
const DbCommon =require('../db/db.common');
class User {

    constructor(){
        this.firstName='';
    }
    
    async create(firstName,lastName,email,age,hobbies){

        try {
            let userActivity=new userSchema({
                firstname: firstName,
                lastname:lastName,
                email:email,
                createdTime: new Date(),
                hobbies :hobbies,
                age:age
            });

            let result=await DbCommon.save(userActivity);
            return result;
        } catch (error) {
            
        }

    }
}

module.exports=User;