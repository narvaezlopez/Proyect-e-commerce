const mysql_model = function(MySQL){

    this.getAll=function(){
        return new Promise((resolve,reject)=>{
            MySQL.connect(function(err) {
                if (err){
                    reject(err);
                }else{
                    MySQL.query("SELECT * FROM actor", function (err, result, fields) {
                        if (err) throw err;
                        console.log(fields);
                        resolve(result);
                    });
                    
                }
                
            });
        });
    };
    return this;
};

module.exports = mysql_model;