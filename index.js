const express = require("express") //import express
const mongoose = require("mongoose") //import mongoose for DB management
const dotenv = require("dotenv").config() //import env  
const dbUrl = process.env.DATABASE_CONNECT // link to datanase connection
const port = process.env.LOCAL_SERVER_PORT || 5000 //link to local port port

//initialise express 
const app = express()

//middleware
app.use(express.json())

//connected to mongoose database
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(result  => app.listen(port, () => console.log(`The database is connected on port ${port}`)))
    .catch(err => console.log("error: ", err))
