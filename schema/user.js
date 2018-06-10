const mongoose =require('mongoose');
const dbCommon=require('../db/db.common');

const userSchema = mongoose.Schema({
    firstname: String,
    lastname:String,
    email:String,
    createdTime:Date,
    hobbies :mongoose.Schema.Types.Mixed,
    age:Number
});

const User =dbCommon.getDB().model('User',userSchema);
module.exports=User;