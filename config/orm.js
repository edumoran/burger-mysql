// Import MySQL connection.
var connection = require("./connection.js");

// Object for the SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function(err,result) {
      if (err) throw err;
      cb(result);
    })
  }, 

  update: function (tableInput, condition, cb) {
    connection.query('UPDATE '+ tableInput +' SET devoured=true WHERE id=' + condition + ';', function(err,result) {
      if (err) throw err;
      cb (result);
    })
  },

  create: function(tableInput, val, cb) {
    connection.query('INSERT INTO ' + tableInput +" (name) VALUES ('"+ val +"');", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },

};

// Export the orm object for the model
module.exports = orm;


