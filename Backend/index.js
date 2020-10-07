const express = require("express");
const app = express();
const config = require("./config.json");
const port = process.env.PORT?process.env.PORT:config.app.port?config.app.port:3456;//SELECT ANY PORT
const cors = require("cors");
const bodyParser = require("body-parser");

const general = require("./app/utils/general")();

let e_userController = require('./app/utils/controller')('e_user');
let stateController = require('./app/utils/controller')('state');
let picture_productController = require('./app/utils/controller')('picture_product');
let inventory_productController = require('./app/utils/controller')('inventory_product');
let order_productController = require('./app/utils/controller')('order_product');
let g_orderController = require('./app/utils/controller')('g_order');
let paymentController = require('./app/utils/controller')('payment');
let credit_debit_cardController = require('./app/utils/controller')('credit_debit_card');
let rolController = require('./app/utils/controller')('rol');
let user_rolController = require('./app/utils/controller')('user_rol');
let categoriesController = require('./app/utils/controller')('categories');

//SERVER CONNECTION
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//CONTROLLERS
app.use('/e_user', e_userController);
app.use('/state', stateController);
app.use('/picture_product', picture_productController);
app.use('/inventory_product', inventory_productController);
app.use('/order_product', order_productController);
app.use('/g_order',g_orderController);
app.use('/payment',paymentController);
app.use('/credit_debit_card',credit_debit_cardController);
app.use('/rol',rolController);
app.use('/user_rol',user_rolController);
app.use('/categories',categoriesController);

general.connectMySQL();

app.listen(port, () => {
    console.log("Running server on port "+port);
});



  
 



