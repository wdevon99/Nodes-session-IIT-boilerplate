const mongoose = require('mongoose');
const connectionStr='mongodb://localhost/databaseName';
const _dbMongo = mongoose.createConnection(connectionStr);

class DbCommon{

    getDB(){
        return _dbMongo;
    }
    
    async save(schema){
        try {

            let result= await schema.save();
            return result;
            
        } catch (e) {
            
        }

    }

}

module.exports= new DbCommon();