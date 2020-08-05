const config = require('../../config.json');
const Controller = function (TABLE) {
    const express = require('express');
    const router = express.Router();

    const general = require("./general")();
    general.setDefaultDatabase(config.database.default);
    let model = general.getDatabaseModel();
    general.connectMySQL();
    //{{SERVER}}/users/ 
    //Lista todos los usuarios
    router.get('/', function (request, response) {
        //if (validationToken.auth) {
        if (true) {
            model.getAll(TABLE)
                .then((rows) => {
                    response.send(rows);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        } else {
            response.send({ error: 'No se ha enviado un token', message: validationToken.message });
        }

    });

    router.post('/', function(request, response){
        //if (validationToken.auth) {
        console.log("ENTERING POST");
        console.log(request.body);    
        if (true) {
            model.addData(TABLE, request.body)
                .then((Objeto) => {
                    response.send(Objeto);
                    console.log(Objeto);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        } else {
            response.send({ error: 'No se ha enviado un token', message: validationToken.message });
        }
    });

    return router;
};

module.exports = Controller;