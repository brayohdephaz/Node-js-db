var mysql = require('mysql');

//create a connection

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database:"nodedb",//This shows the current database
})

//connect to mysql

con.connect(function(err){
	if(err) throw err;
	console.log("Connected to database");
	//CREATING A TABLE
var sql= "CREATE TABLE customers (name VARCHAR(255), email VARCHAR(255))";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log("Table has been created!....");
	});
});