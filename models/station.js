const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const station= new Schema({
       name:{type:String,required:true},
       location: {type:String, required:true}, 

    
    },{
        versionKey: false 
    });
    
    module.exports = mongoose.model('Station', station,'station_table');