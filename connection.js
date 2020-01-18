var mysql = require('mysql');

//create a connection

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	// database:"nodedb",//This shows the current database
})

//connect to mysql

con.connect(function(err){
	if(err) throw err;
	console.log("Connected to database");
	CREATING A DATABASE
	con.query("CREATE DATABASE nodeDB", function(err, result){
		if(err) throw err;
		console.log("Database created!");
	});

	
});