import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js'


const app = express();

// Routes creation
app.use('/students',studentRoutes);

app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));

app.use(cors());


// Mongo DB Connection String
const CONNECTION_URL = 'mongodb+srv://abhikumar18:abhishek@cluster0.gjyal2t.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true
}).then(() => app.listen(PORT,() => 
console.log(`Connection is established and running on port: ${PORT}`))).catch((err)=>console.log(err.message));


// mongoose.set('useFindAndModify',false);








const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));

app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use(cors());


const CONNECTION_URL = 'mongodb+srv://issume:K3Ayh2vR34Jv62Yj@issume.q7r6fty.mongodb.net/?retryWrites=true&w=majority';

const PORT  = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>app.listen(PORT, ()=>
    console.log('Connection is established and running on port:${PORT}')
)).catch((err)=>console.log(err.message));

mongoose.set('useFindAndModify',false);