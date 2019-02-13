// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  port: 3306,
  user: "bec97f865617df",
  password: "54ee8f2f",
  database: "heroku_a05aae96b4ff602"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

// mysql://bec97f865617df:54ee8f2f@us-cdbr-iron-east-03.cleardb.net/heroku_a05aae96b4ff602?reconnect=true