const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require ('dotenv')
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");
// const postRoute = require('./routes/posts');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },() => 
console.log("connected to db!")
);

//Middleware
app.use(cors())
app.use(express.json());


//Routes Middleware
app.use("/", authRoute);
// app.use('/post', postRoute);


app.listen(8080, () => console.log("Server Up and Running"));
