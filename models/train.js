const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const train= new Schema({
    dep_time:{type:Date,required:true},
    dep_date:{type:Date,required:true},
    duration:{type:Date,required:true},
    start_station:{type:mongoose.Types.ObjectId,ref:'Station', required:true},
    end_station:{type:mongoose.Types.ObjectId,ref:'Station', required:true},
    
    },{
        versionKey: false 
    });
    
    module.exports = mongoose.model('Train', train,'train_table');