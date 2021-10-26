const express = require('express');
const path = require('path')
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors   = require('cors');
const connectDB = require('./config/db');
//load env vars
dotenv.config({ path: './config/config.env'});

//connect to database
connectDB();


const main = require('./routes/tasks');
const asistencia = require('./routes/asistencia');

const app = express();
//Body parser
app.use(express.json({limit: '50mb'}));
app.use(cors());
app.use(morgan('tiny'));


//Mount routers
app.use('/',main);
app.use('/',asistencia);

const PORT = process.env.PORT || 3002

const server = app.listen(
    PORT, 
    console.log(`Server running on port ${PORT}`)
);

process.on('unhandledRejection', (err,promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(()=>process.exit(1))
})