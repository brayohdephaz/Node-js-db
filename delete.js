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
	//DELETE RECORD
	var name_search = 'b%';
	var id_search = 1;
var sql = "DELETE  FROM customers WHERE id = 3";

	con.query(sql, function(err, result){
		if(err) throw err;
			console.log("Record deleted successfully!");
		
	});
});