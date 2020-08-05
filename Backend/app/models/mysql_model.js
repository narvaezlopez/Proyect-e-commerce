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
            MySQL.query("INSERT INTO actor(first_name, last_name) VALUES('julian', 'narvaez')", function (err, result, fields) {
                if (err) throw err;
                console.log(fields);
                resolve(result);
            });
                         
        });
    };
    return this;
};

module.exports = mysql_model;