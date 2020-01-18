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
	//SELECT SPECIFIC DATA TABLE
var sql = "SELECT name, id FROM customers";

	con.query(sql, function(err, result, fields){
		if(err) throw err;
			console.log(result);
		//To be specific use the array index[0]
		//print names only(results.name)
	});
});