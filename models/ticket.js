const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Passenger = require('./passenger');
const Station = require('./station');
const Train = require('./train');
const {ObjectId} = mongoose.Schema; 

const ticket= new Schema({
   pass_id:{type:mongoose.Types.ObjectId,ref:'Passenger', required:true},
   train_id:{type:mongoose.Types.ObjectId,ref:'Train', required:true},
   destination: {type:mongoose.Types.ObjectId,ref:'Station', required:true},
   price: {type:Number, required:true},
   seat_no:{type:String,required:true},

   
    
    },{
        versionKey: false 
    });
    
    module.exports = mongoose.model('Ticket', ticket,'ticket_table');