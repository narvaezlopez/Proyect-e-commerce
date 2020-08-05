const mysql_model = function(MySQL){
    
    //GET TABLE DATA
    this.getAll=function(table){
        return new Promise((resolve,reject)=>{
            MySQL.query("SELECT * FROM actor", function (err, result, fields) {
                if (err) throw err;
                console.log(fields);
                resolve(result);
            });   

        });
    };
    //INSERT DATA ON TABLE
    this.addData=function(table, params){
        return new Promise((resolve,reject)=>{

            let query = 'INSERT INTO ' + table + ' ('
            let columnNames = '';
            let columnValues = '';
            for (let [key, value] of Object.entries(params)) {
                columnNames += key + ", "
                if (isNaN(value)) {
                    columnValues += "'" + value + "', ";
                } else {
                    columnValues += value + ", ";
                }
            }
            query += columnNames.substring(0, columnNames.length - 2);
            query += ') values (';
            query += columnValues.substring(0, columnValues.length - 2);
            query += ');';

            console.log(query);

            MySQL.query(query, function (error) {
                if (error) {
                    let info = {
                        message: error.message,
                        table: table,
                        params: params
                    }
                    reject(info);
                } else {
                    resolve(params);
                }
            });
                         
        });
    };
    return this;
};

module.exports = mysql_model;