import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

//creating an object of Express
const app = express();
app.use(cors());

//Tells JSOn wiil be used with a limit of 20mb
app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));

//Routes Creation
app.use('/students', studentRoutes);




// Connection to MongoDB
const CONNECTION_URL = 'mongodb+srv://issume:1234@cluster0.02zx9mt.mongodb.net/?retryWrites=true&w=majority';

//Will use port 3000  0r anyother 0r 5000 if not available
const PORT  = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>app.listen(PORT, ()=>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err)=>console.log(err.message));

//mongoose.set('useFindAndModify',false);
