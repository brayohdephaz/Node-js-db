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
	//LIMIT SEARCH
var sql = "SELECT *FROM customers ORDER BY id DESC LIMIT 100 ";
	con.query(sql, function(err, result){
		if(err) throw err;
			console.log(result);
		
	});
});