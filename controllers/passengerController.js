const express = require('express');
const router = express.Router();
const Passenger = require('../models/passenger.js');
require('dotenv/config');



    router.post('/createpassenger', async (req, res) => {
        try{

            const newPassenger = new Passenger();
            newPassenger.pass_name= req.body.pass_name;
            newPassenger.contact= req.body.contact;
            newPassenger.email= req.body.email;
            newPassenger.age= req.body.age;
            await newPassenger.save();
    
                
               
           
            res.status(200).json({status:'success', message:'Passenger details added sucessfully' });
            }catch(err){
                return res.status(500).send("Unexpected error occurred");
            }
        
    })
    router.post('/updatepassenger', async (req, res) => {
        try{

            await Passenger.findByIdAndUpdate(req.body.id,{email:req.body.email});
           
          
            res.status(200).json({status:'success', message:'Passenger email updated sucessfully' });
            }catch(err){
                return res.status(500).send("Unexpected error occurred");
            }
        
    })
    router.post('/deletepassenger', async (req, res) => {
        try{

            await Passenger.findByIdAndDelete(req.body.id);
           
          
            res.status(200).json({status:'success', message:'Passenger deleted sucessfully' });
            }catch(err){
                return res.status(500).send("Unexpected error occurred");
            }
        
    })
   
module.exports = router;