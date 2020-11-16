var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(input, cb) {
        orm.insertOne(`${input}`, function(res) {
            cb(res);
        });
    },
    update: function(val, id, cb) {
        orm.updateOne(val, id, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;