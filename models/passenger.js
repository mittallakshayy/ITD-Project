const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const passenger= new Schema({
    pass_name:{type:String,required:true},
    contact: {type:String, required:true}, 
    email: {type:String,required:true},
    age:{type:Number, required:true},
   
    
    },{
        versionKey: false 
    });
    
    module.exports = mongoose.model('Passenger', passenger,'passenger_table');