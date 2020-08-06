const config = require('../../config.json');
const Controller = function (TABLE) {
    const express = require('express');
    const router = express.Router();

    const general = require("./general")();
    general.setDefaultDatabase(config.database.default);
    let model = general.getDatabaseModel();
    
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

    //Trae un usuario por ID
    router.get('/:id', function (request, response) {
        let id = request.params.id;
        let column_id=request.body.column_id;
        if (true) {
            model.getById(TABLE,column_id,id)
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
    
    //Crear usuario 
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

    router.put('/:id',function(request,response){
        let id = request.params.id;
        let column_id=request.body.column_id;
        if (true) {
            model.updateData(TABLE, request.body,column_id, id)
                .then((row) => {
                    response.send(row);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        } else {
            response.send({ error: 'No se ha enviado un token' });
        } 
    });

    router.delete('/:id', function (request, response) {
        let id = request.params.id;
        let column_id=request.body.column_id;
        //if (validationToken.auth) {
        if (true) {
            model.delete(TABLE,column_id, id)
                .then((message) => {
                    response.send(message);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        } else {
            response.send({ error: 'No se ha enviado un token' });
        }
    });

    return router;
};

module.exports = Controller;