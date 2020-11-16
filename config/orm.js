var connection = require("../config/connection");

var orm = {
    selectAll: function(cb) {
        var query = connection.query(
            "SELECT * FROM burgers",
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        )
    },

    insertOne: function(input, cb) {
        var query = connection.query(
            `INSERT INTO burgers (burger_name) VALUES ('${input}');`,
            function(err) {
                if (err) throw err; 
                console.log(`${input} added to que.`);
                cb(result);
            }
        )
    },

    updateOne: function(input, id, cb) {
        var query = connection.query(
            `UPDATE burgers SET burger_name = ${input} WHERE id = ${id}`,
            function (err, res) {
                if (err) throw err;
                console.log(res);
                cb(res);
            }    
        )   
    }
};

module.exports = orm;