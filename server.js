const express = require('express');
const app = express();
const cors = require ('cors');
const mongoose = require ('mongoose');
require('dotenv/config');
app.use(cors({origin: true, credentials: true}));
app.use(express.json());




mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Connected to MongoDB');

    app.use("/",require("./controllers/passengerController.js"));
    // app.use("/",require("./controllers/station.js"));
    // app.use("/",require("./controllers/train.js"));
    // app.use("/",require("./controllers/ticket.js"));
    // app.use("/",require("./controllers/collector.js"));

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(process.env.PORT || 4001, ()=>{
    console.log('Listening on port 4001');
    
})
})
.catch((err)=>{
console.log(err);
});