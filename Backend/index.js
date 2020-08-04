const express = require("express");
const app = express();
const config = require("./config.json");
const port = process.env.PORT?process.env.PORT:config.app.port?config.app.port:3456;//SELECT ANY PORT
const Sequelize = require("sequelize");
const cors = require("cors");

//MYSQL SERVER CONNECTION
const sequelize = new Sequelize('e_commerce', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });

  async function sql_con(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  };

//SERVER CONNECTION
app.use(cors());
app.listen(port, () => {
    console.log("Running server on port "+port);
    sql_con();
});



  
 



