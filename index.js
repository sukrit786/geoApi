const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
// const routes = require('./routes/api')
var app = express();

mongoose.connect('mongodb://tombase:tombase1@ds145574.mlab.com:45574/tom',{useNewUrlParser:true});
//for deprication purpose
mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(bodyparser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//error habdle middleware
app.use((err,req,res,next)=>{
    // console.log(err);
    res.status(422).send({error:err.message});
});

app.get('/', (req,res)=>{
    res.end('hey');
});
app.listen(3030, ()=>{
   console.log("hey am at 3030"); 
});