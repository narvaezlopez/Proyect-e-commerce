const config = require('../../config.json');
const General = function(){

    General.defaultDatabase = config.database.default;

    if(typeof General.mysql == 'undefined'){
        /*const Sequelize = require("sequelize");
        const mysqlize= new Sequelize('e_commerce', 'root', 'root', {
            host: 'localhost',
            port: 3306,
            dialect: 'mysql'
        });*/

        const mysql = require('mysql');
        const con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "sakila",
            queueLimit: 0
          });
        
        General.mysql = con;
    }

    this.getMysql = function () {
        return General.mysql;
    };

    this.setDefaultDatabase = function(database){
        General.defaultDatabase = database;
    };

    this.getDatabaseModel = function(){
        let model='';
        switch (General.defaultDatabase) {
            case 'mysql':
                console.log("utilizando My SQL");
                model = require("../models/mysql_model")(General.mysql);
                break;
            default:
                console.log("utilizando My SQL");
                model = require("../models/mysql_model")(General.mysql);
                break;
        }
        return model;
    };

    return this;
};
module.exports = General;