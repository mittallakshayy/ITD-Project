const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const collector= new Schema({
    tc_name:{type:String,required:true},
    contact: {type:String, required:true}, 
    train_id: {type:mongoose.Types.ObjectId,ref:'Train', required:true},
  
    
    },{
        versionKey: false 
    });
    
    module.exports = mongoose.model('Collector', collector,'collector_table');