//importing node modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('mongodb://yuvi:Passw0rd@ds223763.mlab.com:23763/my_contacts',['mycontacts']);


var app = express();
const port = 3000;

const route = require('./routes/route');

//checking mongo connection


//adding middleware (bodyparser, cors, routes)
app.use(cors());
app.use(bodyparser.json());
app.use('/api',route);

//adding the static resource
app.use(express.static(path.join(__dirname, 'public')));

//to test the server
app.get('/', (req, res) =>{
    res.send("Hello MEANny boy !");
});

//serving http on port
app.listen(port, ()=>{
    console.log("Serving at port: "+port)
});