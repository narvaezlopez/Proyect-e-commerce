const express = require("express");
const app = express();
const config = require("./config.json");
const port = process.env.PORT?process.env.PORT:config.app.port?config.app.port:3456;//SELECT ANY PORT
const cors = require("cors");
const bodyParser = require("body-parser");

let cardController = require('./app/utils/controller')('actor');
//SERVER CONNECTION
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//CONTROLLERS
app.use('/card',cardController);

app.listen(port, () => {
    console.log("Running server on port "+port);
});



  
 



